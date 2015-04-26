define([],function(){

	function MapController(oIntervalGetModel, oMapView){

		var viewList = [
		    'area name',
		    'water temperature', 
		    'pH', 
		    'salinity', 
		    'battery voltage'
		];
        var transList = {
            'area name'         : '장소',
            'water temperature' : '수온',
            'pH'                : 'pH',
            'salinity'          : '염분',
            'battery voltage'   : '전압'
        };
		var latitude = 35.225183;
		var longitude = 126.843047;

		this.init = init;

		function init(){
			oMapView.draw({
				latitude 	: latitude,
				longitude 	: longitude
			});

			oIntervalGetModel.on('get data', function(data){
			    oMapView.clearAllMarker();

			    _.forEach(data, function(areaData){
			    	oMapView.addInfoMarker({
			    	    title       : areaData['area name'],
			    	    info        : areaData,
			    	    viewList	: viewList,
			    	    transList 	: transList,
			    	    latitude    : areaData.latitude,
			    	    longitude   : areaData.longitude
			    	});
			    });
			    
			});
		}
	}

	return MapController;
});