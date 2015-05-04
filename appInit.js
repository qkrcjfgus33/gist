function appInit(){

	//init들 실행.
	requirejs(['intervalInit', 'tableInit', 'mapInit'],
		function(intervalInit, tableInit, mapInit){

		intervalInit();
		tableInit();
		mapInit();
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