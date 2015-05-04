define([],function(){

	function MapController(oIntervalGetModel, oMapView){

		var viewList = [
		    '수온', 
		    'pH', 
		    '염분', 
		    '전압'
		];
        var transList = {
            '수온' 				: '수온',
            'pH'                : 'pH',
            '염분'          		: '염분',
            '전압'   				: '전압'
        };
		var latitude = 35.225183;
		var longitude = 126.843047;
		var infoMarkerOption = {};

		this.init = init;

		function init(){
			oMapView.draw({
				latitude 	: latitude,
				longitude 	: longitude
			});

			oIntervalGetModel.on('get data', function(data){
			    oMapView.clearAllMarker();

			    _.forEach(data, function(areaData){
			    	infoMarkerOption = {
		    		    title       : areaData['name'],
		    		    info        : areaData,
		    		    viewList	: viewList,
		    		    transList 	: transList,
		    		    latitude    : areaData.latitude,
		    		    longitude   : areaData.longitude
		    		}
			    	if(areaData.activity === '1'){
			    		infoMarkerOption.className = 'marker_normal';
			    	}

			    	if(areaData.activity === '0'){
			    		infoMarkerOption.className = 'marker_hidden';
			    	}

			    	oMapView.addInfoMarker(infoMarkerOption);
			    });
			    
			});
		}
	}

	return MapController;
});