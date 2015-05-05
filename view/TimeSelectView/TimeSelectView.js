define(['jquery', 'lodash', 'EventEmitter', 'tpl!/view/TimeSelectView/timeSelect.tpl'],
	function($, _, EventEmitter, timeSelectTpl){

	function TimeSelectView(selector){
		/* public start */
		this.draw 		= draw;
		this.getTime 	= getTime;
		this.setTime 	= setTime;
		/* public end */

		/* private start */
		var instance = this;
		var time;

		var $container = $(selector);
		var $IO;
		/* private end */

		function draw(option){
			$container.html(timeSelectTpl(option));

			$IO = $container.find('[selectTimer]');

			$IO.on('change', _change);

			_change();
		}

		function _change(){
			time = parseFloat($IO.val());
			instance.emit('change', time);
		}

		function getTime(){
			return time;
		}

		function setTime(_time){
			time = parseFloat(_time);
			$IO.val(time);
			instance.emit('change', time);
		}
	}

	//EventEmitter 클래스 상속
	TimeSelectView.prototype = _.clone(EventEmitter.prototype);

	return TimeSelectView;
});