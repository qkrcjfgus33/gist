define(['getQueryVariable'],function(getQueryVariable){

	function ChartController(oAtomsphereModel, oChartView, oPageNaveView){
		this.init = init;

		var gets = getQueryVariable();
		var viewNavHalfNum = 5;
		var viewPageNum = 10;
		var currentNavNum = 0;

		function init(){
			
			oAtomsphereModel.getTotalPageNum(gets)
				.done(function(totalPageNum){
				    oPageNaveView.init(currentNavNum, totalPageNum, viewPageNum, viewNavHalfNum);
					oPageNaveView.draw();
					oPageNaveView.syncCurrentPage();
				});
			
			oPageNaveView.on('syncCurrentPage', function(_currentNavNum){
				currentNavNum = _currentNavNum;
				var sendData = {
					srl				: gets.srl,
					startPageNum 	: viewPageNum * currentNavNum,
					viewPageNum		: viewPageNum
				};

				oAtomsphereModel.loadData(sendData)
					.done(function(data){
						if(currentNavNum === _currentNavNum){
							oChartView.draw({
								title: gets.title,
								data: data
							});
						}
					});
				});
		}
	}

	return ChartController;
});