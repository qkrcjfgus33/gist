define([], function(){
	var latitude, longitude;
	function joinSrl(data){
	    len = data.length;
	    _.forEach(data, function(item){
	        latitude = item.latitude;
	        longitude = item.longitude;
	        item.srl = [latitude,longitude].join('_');
	    });
	}

	return joinSrl;
})