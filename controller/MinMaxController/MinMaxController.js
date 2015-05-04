define(['jquery', 'openPopup'],function($, openPopup){
    
    function MinMaxController(oIntervalGetModel, oTableView){

        var drawOption = {
            viewList    : [
                'no',
                'name', 
                '수온', 
                'pH', 
                '염분', 
                '전압'
            ],
            transList   : {
                'no'                : '부이 No',
                'name'              : '위치',
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
                var len = data.length;
                for(var i = 0 ; i < len ; i++ ){
                    if(data[i].activity === '0'){
                        _.pullAt(data, i);
                        i--;
                        len--;
                    }else{
                        data[i].no = i+1;
                    }
                } 

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

    return MinMaxController;
});

/*

 */