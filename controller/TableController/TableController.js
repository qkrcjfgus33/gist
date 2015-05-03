define(['jquery', 'openPopup'],function($, openPopup){
    
    function TableController(oIntervalGetModel, oTableView){

        var drawOption = {
            viewList    : [
                'name', 
                'datetime', 
                '수온', 
                'pH', 
                '염분', 
                '전압'
            ],
            transList   : {
                'name'              : '장소',
                'datetime'          : '날짜',
                '수온'               : '수온',
                'pH'                : 'pH',
                '염분'               : '염분',
                '전압'               : '전압'
            }
        }

        var popupOption = {
            width: 1000,
            height: 800,
            resizable: 'no',
            scrollbars: 'no',
            status: 'no',
            title: '자세히 보기'
        }

    	this.init = init;

        function init(){
            //Init Table
            oIntervalGetModel.on('get data', function(data){
                drawOption.data = data;
                oTableView.draw(drawOption);
            });

            oTableView.on('open detail', function(srl, title){
                openPopup('pages/detail/detail.html', popupOption, {
                    srl: srl,
                    title: title
                });
            })
        }
    }

    return TableController;
});

/*

 */