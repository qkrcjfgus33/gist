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
            var latlng = new google.maps.LatLng(option.latitude, option.longitude);
            /*var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: option.title
            });*/

            var marker = new MarkerWithLabel({
                position: latlng,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0, //tamaño 0
                },
                draggable: false,
                raiseOnDrag: false,
                map: map,
                labelAnchor: new google.maps.Point(0, 0),
                labelClass: option.className
            });
            var keys = _.keys();

            var content = infoWindowTpl({
                title       : option.title,
                viewList    : option.viewList,
                transList   : option.transList,
                info        : option.info
            });

            content += infoWindowButtonTpl({
                info        : option.info
            });

            marker.infowindow = new google.maps.InfoWindow({
                content: content
            });
            if(typeof marker.isInfowindowOpen !== 'boolean'){
                marker.isInfowindowOpen = false;
            }
            
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
                marker.infowindow.close();
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