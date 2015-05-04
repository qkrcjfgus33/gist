function appInit(){

	//init들 실행.
	requirejs(['intervalInit', 'minMaxInit', 'tableInit', 'mapInit'],
		function(intervalInit, minMaxInit, tableInit, mapInit){
			
		intervalInit();
		tableInit();
		mapInit();
		minMaxInit();
	});

	requirejs(['jquery'], function($){
		$('body').on('click', '[custom-link-popup]', function(e){
			openPopup($(e.currentTarget).attr('popup-url'));
		})

		function openPopup(url){
		    var popOption = [];
		    var option = {
		    	width: 1000,
		    	height: 700,
		    	resizable:'no', 
		    	scrollbars:'no', 
		    	status:'no'
		    }
		    for(var key in option){
		        popOption.push(key+'='+option[key]);
		    }
		    popOption = popOption.join(', ');
		    popOption = popOption + ';';

		    window.open(url, '', popOption);
		}
	})
}