define([], function(){
	/**
	 * 주소에 있는 값을 객체로 가져오는 함수
	 * @return {Object} url에 있는 값들
	 */
	function getQueryVariable() {
	    var vars= {};
	    var url_search = window.location.search;
	    if(url_search.length!==0)
	        url_search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
	            key=decodeURIComponent(key);
	            if(typeof vars[key]==="undefined") {
	                vars[key]= decodeURIComponent(value);
	            }
	            else {
	                vars[key]= [].concat(vars[key], decodeURIComponent(value));
	            }
	    });
	    return vars;
	}

	return getQueryVariable;
})