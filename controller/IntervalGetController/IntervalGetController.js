define([],function(){

	function IntervalGetController(oIntervalGetModel, oIntervalGetView){

		this.init = init;

		var drawOption = {
			secondList : [10, 5, 1],
			unit: '초'
		}

		function init(){
			oIntervalGetView.on('syncInterval', function(interval){
				oIntervalGetModel.setInterval(interval)
			});

			oIntervalGetView.draw(drawOption);
			oIntervalGetView.syncInterval();

			oIntervalGetModel.play();
			oIntervalGetModel.tryGet();
		}
	}

	return IntervalGetController;
});
/*

*/