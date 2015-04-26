define([],function(){

	function IntervalGetController(oIntervalGetModel, oIntervalGetView){

		var secondList = [10, 5, 1];
		var unit = '초';

		this.init = init;

		function init(){
			oIntervalGetView.draw(secondList, unit)
			oIntervalGetView.on('syncInterval', oIntervalGetModel.setInterval);
			oIntervalGetView.syncInterval();

			oIntervalGetModel.play();
			oIntervalGetModel.tryGet();
		}
	}

	return IntervalGetController;
});
/*

*/