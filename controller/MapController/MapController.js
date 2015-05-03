define([],function(){

	function MapController(oIntervalGetModel, oMapView){

		var viewList = [
		    'name',
		    '수온', 
		    'pH', 
		    '염분', 
		    '전압'
		];
        var transList = {
            'name'         		: '장소',
            '수온' 				: '수온',
            'pH'                : 'pH',
            '염분'          		: '염분',
            '전압'   				: '전압'
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