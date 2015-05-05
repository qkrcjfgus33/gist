define([],function(){

	function MapController(oModel, oMapView){

        var transList = {
            '수온' 				: '수온',
            'pH'                : 'pH',
            '염분'          		: '염분',
            '전압'   				: '전압'
        };
		var latitude = 35.225183;
		var longitude = 126.843047;
		var infoMarkerOption = {};
		var bouyDataList;

		this.init = init;

		function init(){
			oMapView.draw({
				latitude 	: latitude,
				longitude 	: longitude
			});

			oModel.onGet('BouyList', function(bouyData){
				oMapView.clearAllMarker();

			    bouyDataList = bouyData.bouy;

			    _.forEach(bouyDataList, function(bouy, bouy_id){
			        drawData = {
			            'title'    	: bouy.name,
			            'bouyId'	: bouy_id,
			            'transList' : transList,
			            'latitude'  : bouy.latitude,
			            'longitude' : bouy.longitude,
			            'activity'	: bouy.activity,
			            'info'		: { }
			        };

			        _.forEach(bouy.data, function(atmosphere, atmosphere_id){
			            drawData.info[atmosphere.name] = atmosphere.data;
			        });

			        if(bouy.activity === '1'){
			        	drawData.color = 'rgba(0,0,255,1)';
			        }

			        if(bouy.activity === '0'){
			        	drawData.color = 'rgba(0,0,255,0.4)';
			        }

			        console.log(drawData);
			        oMapView.addInfoMarker(drawData);
			    });
			});
/*
			oModel.on('get data', function(data){
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
			    
			});*/
		}
	}

	return MapController;
});