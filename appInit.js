function appInit(){

	//init들 실행.
	requirejs(['intervalInit', 'tableInit', 'mapInit'],
		function(intervalInit, tableInit, mapInit){

		intervalInit();
		tableInit();
		mapInit();
	});
}