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
/*
        JQuery + JSON을 통한 부이의 이름을 가져온다.
*/
  function JSONgetBuoyName(bouy_id)
  {
     return $.get('loadData.php', { bouy_id : bouy_id});
  }

/*
      JQuery + JSON을 통한 부이의 속성마다 최소 최대 값을 가져온다.
 */
  function JSONgetminMax(bouy_id)
  {

      return $.get('minMaxData.php', { bouy_id : bouy_id});
  }

