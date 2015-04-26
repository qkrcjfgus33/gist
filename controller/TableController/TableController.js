define(['jquery'],function($){
    
    function TableController(oIntervalGetModel, oTableView){

        var viewList = [
            'area name', 
            'date', 
            'time', 
            'water temperature', 
            'pH', 
            'salinity', 
            'battery voltage'
        ];
        var transList = {
            'area name'         : '장소',
            'date'              : '날짜',
            'time'              : '시간',
            'water temperature' : '수온',
            'pH'                : 'pH',
            'salinity'          : '염분',
            'battery voltage'   : '전압'
        };
        var clickDetailTagList = [
            "[infoType='water temperature']",
            "[infoType='pH']",
            "[infoType='salinity']",
            "[infoType='battery voltage']"
        ];

    	this.init = init;

        function init(){
            //Init Table
            oIntervalGetModel.on('get data', function(data){
                oTableView.draw(data, viewList, transList);
            });

            //set DetailPopup
            clickDetailTagList = clickDetailTagList.join(',');

            $(oTableView.getDOMContainer()).on('click', clickDetailTagList, function(e){
                var srl = $(e.currentTarget).attr('srl');
                var title = $(e.currentTarget).attr('title');
                oTableView.openDetailPopup(srl, title);
            });
        }
    }

    return TableController;
});

/*

 */