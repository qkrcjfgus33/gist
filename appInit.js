function appInit(){

	requirejs(['customLinkPopup'], 
		function(customLinkPopup){

		customLinkPopup.regist();	
	});

	//init들 실행.
	requirejs(['intervalInit', 'minMaxInit', 'tableInit', 'mapInit'],
		function(intervalInit, minMaxInit, tableInit, mapInit){

		intervalInit();
		minMaxInit();
		tableInit();
		mapInit();
	});
}