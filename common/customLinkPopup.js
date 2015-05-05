define(['jquery'], function($){
	var one = false;
	var customLinkPopup = {};

	function regist(){
		if(one){
			return;
		}
		one = true;
		$('body').on('click', '[custom-link-popup]', function(e){
			openPopup($(e.currentTarget).attr('popup-url'));
		})
	}

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

	customLinkPopup.regist = regist;
	return customLinkPopup;
})