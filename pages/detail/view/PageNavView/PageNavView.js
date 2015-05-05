define(['jquery', 'lodash', 'EventEmitter', 'datetimeFormat', 'tpl!/view/PageNavView/pageNav.tpl', 'datetimepicker'],
	function($, _, EventEmitter, datetimeFormat, pageNavTpl){

	var id = 0;

	function getID(){
		return 'page_nav_IO_'+id;
	}

	function PageNaveView(dom){

		this.syncPage 	= syncPage;
		this.draw 		= draw;

		var $container = $(dom);
		var instance = this;
		var format = 'Y-m-d H:i';
		var now = new Date();

		var endDatetime =  new Date(now);
		var endDatetimeStr = datetimeFormat(endDatetime, format);
		

		now.setHours(now.getHours() - 1);

		var startDatetime = new Date(now);
		var startDatetimeStr = datetimeFormat(startDatetime, format);

		function draw(){
			$container.html(pageNavTpl({}));

			$('#start_datetimepicker').datetimepicker({
				lang:'ko',
				format: format,
				onChangeDateTime:function(dp,$input){
				   startDatetimeStr = $input.val();
				}
			}).val(startDatetimeStr);

			$('#end_datetimepicker').datetimepicker({
				lang:'ko',
				format: format,
				onChangeDateTime:function(dp,$input){
				   endDatetimeStr = $input.val();
				}
			}).val(endDatetimeStr);

			$('#befor').on('click', function(){
				startDatetime.setHours(startDatetime.getHours() - 1);
				endDatetime.setHours(endDatetime.getHours() - 1);
				
				startDatetimeStr = datetimeFormat(startDatetime, format);
				endDatetimeStr = datetimeFormat(endDatetime, format);

				$('#start_datetimepicker').val(startDatetimeStr);
				$('#end_datetimepicker').val(endDatetimeStr);
				
				syncPage();
			});

			$('#after').on('click', function(){
				startDatetime.setHours(startDatetime.getHours() + 1);
				endDatetime.setHours(endDatetime.getHours() + 1);
				
				startDatetimeStr = datetimeFormat(startDatetime, format);
				endDatetimeStr = datetimeFormat(endDatetime, format);

				$('#start_datetimepicker').val(startDatetimeStr);
				$('#end_datetimepicker').val(endDatetimeStr);
				
				syncPage();
			});

			$('#move').on('click', function(){	
				syncPage();
			});

			$('#downloadButton').on('click', function(){
				// selectedList 값을 이용해서 popup창 주소에 값을 넘겨준다.
				// selectedChartData를 통해 선택한 값을가져온다. Object[String 타]
				var selectedList = selectedChartData();

				
				// 부이 아이디
				var bouy_id = getQueryVariable().bouy_id;

				// selectList를 변환한다. 보내주기 좋게변환 undefined = 0, else 1
				for(var i in selectedList ) 
				{
					console.log(selectedList[i]);
					if(selectedList[i] == 'undefined' )
						selectedList[i] = 0;
					else 
						selectedList[i] = 1;
				}

				// 창영이 파트로 넘긴다.
				// selectedList[index]안에 값이 없다면 undefined, 있다면 해당 String이 들어있다.
				// 부이의 아이디, List[index](1 or 0), 시작 시간(Str), 종료시간(Str)을 넘깁니다.
				// 챠트가 아예 그려지지 않은상태에서 버튼을 누르면 undefined가 넘어간다.
//------------------------------------- 값을 받아야 부분에서 처리해야 할부분 -------------------------------------
				// bouy_id, selectindex0 selectindex1 selectindex2 selectindex3 startDatetime endDatetime	
				var url = "http://localhost/test.php?bouy_id="+bouy_id+"&selectindex0="+
				selectedList[0]+"&selectindex1="+selectedList[1]+"&selectindex2="+selectedList[2]+
				"&selectindex3="+selectedList[3]+"&startDatetime="+startDatetimeStr+"&endDatetime="+
				endDatetimeStr;

				window.open(url);

				
			});
		}


		function syncPage(){
			instance.emit('syncPage', startDatetimeStr, endDatetimeStr);
		}

		function selectedChartData(){
			var result = [];
			$('.c3-legend-item').each(function(){
				if(($(this).attr('class')).search('c3-legend-item-hidden') < 0){
					result.push($(this).children('text').text());
				}
			});
			return result;
		}

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
	}

	//EventEmitter 클래스 상속
	PageNaveView.prototype = _.clone(EventEmitter.prototype);

	return PageNaveView;
});