define([],function(){
    
    function MinMaxAlramController(oModel, oAlramView){

    	this.init = init;

        var bouyDataList, bouy_id, bouy_data;
        var atmosphere_id, value;
        function init(){
            oAlramView.draw();

            oModel.onGet('MinMaxInfo', function(MinMaxData){
                oModel.onGet('ActivityBouyList', function(bouyData){
                    var text = '';

                    bouyDataList = bouyData.bouy;

                    _.forEach(bouyDataList, function(bouy, bouy_id){
                        _.forEach(bouy.data, function(atmosphere, atmosphere_id){
                            console.log(bouy.name, atmosphere.name, atmosphere.data, MinMaxData[bouy_id].data[atmosphere_id].min, MinMaxData[bouy_id].data[atmosphere_id].max);
                            if( typeof MinMaxData[bouy_id] !== "undefined" &&
                                typeof MinMaxData[bouy_id].data[atmosphere_id] !== "undefined" &&
                                typeof MinMaxData[bouy_id].data[atmosphere_id].min !== "undefined" &&
                                parseFloat(atmosphere.data) < parseFloat(MinMaxData[bouy_id].data[atmosphere_id].min)){
                                
                                text += (' '+bouy.name+', '+atmosphere.name+'- 범위에 못미칩니다.');
                            }

                            if( typeof MinMaxData[bouy_id] !== "undefined" &&
                                typeof MinMaxData[bouy_id].data[atmosphere_id] !== "undefined" &&
                                typeof MinMaxData[bouy_id].data[atmosphere_id].max !== "undefined" &&
                                parseFloat(atmosphere.data) > parseFloat(MinMaxData[bouy_id].data[atmosphere_id].max)){
                                text += (' '+bouy.name+', '+atmosphere.name+'- 범위를 벗어납니다.');
                            }
                        })
                    });

                    oAlramView.alert(text);
                });
            })

            oModel.get('MinMaxInfo');
        }
    }

    return MinMaxAlramController;
});

/*

 */