define(['jquery'],function($){
    
    function MinMaxTableController(oAtomsphereModel, oTableView){

        var drawOption = {
            viewList    : [
                'name',
                'max',
                'min'
            ],
            transList   : {
                'name'  : '속성명',
                'max'   : '최대',
                'min'   : '최소'
            }
        }
        var drawData = {};

    	this.init = init;

        function init(){
            oAtomsphereModel.loadAtomsphereList().done(function(data){
                drawData = [];

                _.forEach(data, function(dataItem, i){
                    drawData.push({
                        'name': dataItem.name,
                        'max' : '<input id="'+dataItem.name+'_max">',
                        'min' : '<input id="'+dataItem.name+'_min">'
                    })
                })

                console.log(drawData);

                drawOption.data = drawData;
                oTableView.draw(drawOption);
            })
        }
    }

    return MinMaxTableController;
});

/*

 */