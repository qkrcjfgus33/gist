define(['getQueryVariable', 'datetimeFormat'],function(getQueryVariable, datetimeFormat){

	function ChartController(oAtomsphereModel, oChartView, oTableView, oPageNaveView){
		this.init = init;

		var gets = getQueryVariable();
		var dateFormat = 'Y-m-d';
		var timeFormat = 'H:i';

		var drawTableOption = {
		    viewList    : [
		        'date', 
		        'time',
		        '수온', 
		        'pH', 
		        '염분', 
		        '전압'
		    ],
		    transList   : {
		        'date'          	: '날짜',
		        'time'          	: '시간',
		        '수온'               : '수온',
		        'pH'                : 'pH',
		        '염분'               : '염분',
		        '전압'               : '전압'
		    }
		}

		function init(){
			
			oAtomsphereModel.getTotalPageNum(gets)
				.done(function(totalPageNum){
					oPageNaveView.draw();
					oPageNaveView.syncPage();
				});
			
			oPageNaveView.on('syncPage', function(startDatetime, endDatetime){

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

						drawTableOption.data = data;
						var len = drawTableOption.data.length;
						for(var i = 0 ; i < len ; i++){
							drawTableOption.data[i].date = datetimeFormat(new Date(drawTableOption.data[i].datetime), dateFormat);
							drawTableOption.data[i].time = datetimeFormat(new Date(drawTableOption.data[i].datetime), timeFormat);
						}

						console.log(drawTableOption);

						oTableView.draw(drawTableOption)
					});
				});
		}
	}

	return ChartController;
});