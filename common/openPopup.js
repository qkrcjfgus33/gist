define([], function(){
	/**
	 * popup창을 띄우는 함수
	 * @param  {string} url    url값
	 * @param  {object} option popup 속성값
	 * @param  {object} prop   get으로 전달할 값들
	 * @example
	 * openPopup('http://www.naver.com',{height:1000, width:1000, resizable:'no', scrollbars:'no', status:'no'},{title:'tt', test:'t!!!est', t123:1234})
	 */
	function openPopup(url, option, prop){
	    var popOption = [];
	    for(var key in option){
	        popOption.push(key+'='+option[key]);
	    }
	    popOption = popOption.join(', ');
	    popOption = popOption + ';';

	    var props = ['t='+(new Date()-0)];
	    for(var key in prop){
	        props.push(key+'='+prop[key]);
	    }
	    props = props.join('&');

	    window.open(url+'?'+props, option.title, popOption);
	}

	return openPopup;
})