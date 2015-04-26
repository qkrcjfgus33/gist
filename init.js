function appInit(){

	requirejs(['intervalInit', 'tableInit', 'mapInit'],
		function(intervalInit, tableInit, mapInit){

		intervalInit();
		tableInit();
		mapInit();
	});

/*
	requirejs(['AtomsphereModel', 'IntervalGetModel'],
		function(AtomsphereModel, IntervalGetModel){

		var oAtomsphereModel = new AtomsphereModel();
		var oIntervalGetModel = new IntervalGetModel();

		oIntervalGetModel.on('get data', function(data){
			oAtomsphereModel.saveData(data);
		});
	});
*/
};
	