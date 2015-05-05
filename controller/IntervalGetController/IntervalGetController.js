define([],function(){

	function IntervalGetController(oModel, oTimeSelectView, oIntervalView){

		this.init = init;

		var drawOption = {
			secondList : [10, 5, 1],
			unit: '분',
			backText: ' 간격으로 업데이트 됩니다.'
		}

		function init(){
			oIntervalView.on('fire', function(){
				oModel.get('ActivityBouyList');
				oModel.get('BouyList');
			})

			oTimeSelectView.on('change', function(time){
				oIntervalView.setIntervalTime(time);
				oIntervalView.fire();
				oIntervalView.play();
			});

			oTimeSelectView.draw(drawOption);
		}
	}

	return IntervalGetController;
});
/*

*/