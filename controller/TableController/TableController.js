define(['jquery'],function($){
    
    function TableController(oModel, oTableView){

        var drawOption = {
            transList   : {
                'no'                : '부이 No',
                'name'              : '위치',
                '수온'               : '수온',
                'pH'                : 'pH',
                '염분'               : '염분',
                '전압'               : '전압'
            }
        }
        var drawDataList, drawData;

    	this.init = init;

        function init(){
            //Init Table
            oModel.onGet('ActivityBouyList', function(bouyData){
                bouyDataList = bouyData.bouy;
                drawDataList = [];

                _.forEach(bouyDataList, function(bouy, bouy_id){
                    drawData = {
                        'no'    : bouy_id,
                        'name'  : bouy.name,
                    };

                    _.forEach(bouy.data, function(atmosphere, atmosphere_id){
                        drawData[atmosphere.name] = atmosphere.data;
                    })

                    drawDataList.push(drawData);
                });

                drawOption.data = drawDataList;
                oTableView.draw(drawOption);
            });
        }
    }

    return TableController;
});

/*

 */