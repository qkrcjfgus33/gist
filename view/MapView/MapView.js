define(['tpl!/view/MapView/infoWindow.tpl'], 
    function(infoWindowTpl){

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
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: option.title
            });
            var keys = _.keys();

            var content = '';
            _.forEach(option.infoKey, function(val, key){
                content += (val + ' = ' + option.info[key] + '<br>');
            });

            marker.infowindow = new google.maps.InfoWindow({
                content: infoWindowTpl({
                    title       : option.title,
                    viewList    : option.viewList,
                    transList   : option.transList,
                    info        : option.info
                })
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