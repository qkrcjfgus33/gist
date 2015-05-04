define(['jquery', 'lodash', 'EventEmitter', 'tpl!/view/PageNavView/pageNav.tpl', 'datetimepicker'],
	function($, _, EventEmitter, pageNavTpl){

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
		}


		function syncPage(){
			instance.emit('syncPage', startDatetimeStr, endDatetimeStr);
		}
	}

	//EventEmitter 클래스 상속
	PageNaveView.prototype = _.clone(EventEmitter.prototype);

	function datetimeFormat(d, f) {
	    return f.replace(/(Y|m|d|H|i|s)/gi, function($1) {
	        switch ($1) {
	            case "Y": return d.getFullYear();
	            case "m": return fillzero((d.getMonth() + 1),2);
	            case "d": return fillzero(d.getDate(), 2);
	            case "H": return fillzero(d.getHours(), 2);
	            case "i": return fillzero(d.getMinutes(), 2);
	            case "s": return fillzero(d.getSeconds(), 2);
	            default: return $1;
	        }
	    });

	    function fillzero(obj, len) {
		    obj= '000000000000000'+obj;
		    return obj.substring(obj.length-len);
	    }
	};

	return PageNaveView;
});