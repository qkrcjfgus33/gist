define(['MarkerWithLabel', 'tpl!/view/MapView/infoWindow.tpl', 'tpl!/view/MapView/infoWindowButton.tpl'], 
    function(MarkerWithLabel, infoWindowTpl, infoWindowButtonTpl){

    function MapView(selector) {
        this.draw               = draw;
        this.addInfoMarker      = addInfoMarker;
        this.clearAllMarker     = clearAllMarker;
        
        var map;
        var markers = [];
        var $container = $(selector);
        var DOMContainer = $container[0];

        function draw(option){
            var latlng = new google.maps.LatLng(option.latitude, option.longitude);
            var mapOptions = {
                zoom: 15,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(DOMContainer, mapOptions);
        }

        function addInfoMarker(option) {
            var latlngMarker = new google.maps.LatLng(option.latitude, option.longitude);
            var marker = new google.maps.Marker({
                position: latlngMarker,
                map: map,
                title: option.title,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: 'yellow',
                    strokeColor: option.color,
                    fillOpacity: 0,
                    scale: 10
                }
            });/*

            var marker = new MarkerWithLabel({
                position: latlngMarker,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 1,
                },
                draggable: false,
                raiseOnDrag: false,
                map: map,
                labelClass: option.className
            });
*/
            var content = infoWindowTpl(option);

            content += infoWindowButtonTpl(option);

            marker.infowindow = new google.maps.InfoWindow({
                content: content
            });
            
            marker.isInfowindowOpen = false;
            
            google.maps.event.addListener(marker, 'click', function () {
                _.forEach(markers, function(marker){
                    marker.infowindow.close();
                })

                if(!this.isInfowindowOpen){
                    this.infowindow.open(map, this);
                    this.isInfowindowOpen = true;
                }else{
                    this.isInfowindowOpen = false;
                }
            });

            markers.push(marker);

            return marker;
        }

        function clearAllMarker(){
            _.forEach(markers, function(marker){
                marker.setMap(null);
            })
            markers = [];
        }
    }

    function isInfoWindowOpen(infoWindow){
        var map = infoWindow.getMap();
        console.log(map);
        return (map !== null && typeof map !== "undefined");
    }

    return MapView;
});