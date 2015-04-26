define([],function(){

	function ChartController(oAtomsphereModel, oChartView, oPageNaveView){

		var gets = getQueryVariable();
		var viewNavHalfNum = 5;
		var viewPageNum = 10;

		this.init = init;

		function init(){
			
			oAtomsphereModel.getTotalPageNum(gets)
				.done(function(totalPageNum){
				    oPageNaveView.init(totalPageNum, viewPageNum, viewNavHalfNum);
					oPageNaveView.setCurrentNavNum(0);
					oPageNaveView.draw();
					oPageNaveView.syncCurrentPage();
				});
			
			oPageNaveView.on('syncCurrentPage', function(currentNavNum){
				
				gets.startPageNum = viewPageNum * currentNavNum;
				gets.viewPageNum = viewPageNum;

				oAtomsphereModel.loadData(gets)
					.done(function(data){
					    oChartView.draw(gets.title, data);
					});
				});
		}
	}

	function getQueryVariable() {
	    var vars= {};
	    var url_search = window.location.search;
	    if(url_search.length!==0)
	        url_search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
	            key=decodeURIComponent(key);
	            if(typeof vars[key]==="undefined") {
	            	vars[key]= decodeURIComponent(value);
	            }
	            else {
	            	vars[key]= [].concat(vars[key], decodeURIComponent(value));
	            }
	    });
	    return vars;
	}

	return ChartController;
});