define(function(){

function MapView(x, y, id) {
    var latlng = new google.maps.LatLng(x, y);
    var mapOptions = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var infoMarkers = {};
    var map = new google.maps.Map(document.getElementById(id), mapOptions);

    var getSrl = (function(){
        var srl = 0;
        return function(){
            return srl++;
        }
    })();

    var marker, data, content, key, infowindow, len, i, srl;

    this.addMarker = function(option) {
        srl = getSrl();
        latlng = new google.maps.LatLng(option.latitude, option.longitude);
        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: option.title
        });
        marker._$_srl = srl;

        data = option.data;
        content = "";
        for (key in data) {
            content += (key + ' = ' + data[key] + '<br>');
        }

        infowindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: option.maxWidth
        });
        
        google.maps.event.addListener(marker, 'click', function () {
            for (key in infoMarkers) {
                infoMarkers[key].infowindow.close();
            }
            infoMarkers[this._$_srl].infowindow.open(map, this);
        });

        infoMarkers[srl] = {
            marker      : marker,
            infowindow  : infowindow
        }

        return marker;
    }

    this.resetMarker = resetMarker;

    function resetMarker(){
        for (key in infoMarkers) {
            infoMarkers[key].marker.setMap(null);
        }
        infoMarkers = {};
    }

    
}

return MapView;
});