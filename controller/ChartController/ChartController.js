define(['getQueryVariable'],function(getQueryVariable){

	function ChartController(oAtomsphereModel, oChartView, oPageNaveView){
		this.init = init;

		var gets = getQueryVariable();

		function init(){
			
			oAtomsphereModel.getTotalPageNum(gets)
				.done(function(totalPageNum){
					oPageNaveView.draw();
					oPageNaveView.syncPage();
				});
			
			oPageNaveView.on('syncPage', function(startDatetime, endDatetime){
				console.log(startDatetime, endDatetime);
				var sendData = {
					bouy_id			: gets.bouy_id,
					startDatetime 	: startDatetime,
					endDatetime		: endDatetime
				};

				oAtomsphereModel.loadData(sendData)
					.done(function(data){
						oChartView.draw({
							title: gets.title,
							data: data
						});
					});
				});
		}
	}

	return ChartController;
});