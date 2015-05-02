define(['jquery', 'lodash', 'EventEmitter', 'tpl!/view/IntervalGetView/intervalIO.tpl'],
	function($, _, EventEmitter, intervalIOTpl){

	/* static private start */
	var id = 0;
	function getID(){
		return 'interval_IO_'+id;
	}
	/* static private end */

	function IntervalGetView(selector){
		/* public start */
		this.draw 				= draw;
		this.syncInterval 		= syncInterval;
		/* public end */

		/* private start */
		var instance = this;
		var id = getID();
		var interval;

		var $container = $(selector);
		var $IO;
		/* private end */

		function draw(option){
			$container.html(intervalIOTpl({
				id 			: id,
				secondList 	: option.secondList,
				unit 		: option.unit
			}));

			$IO = $container.find('#'+id);

			$IO.on('change', function(){
				instance.syncInterval();
			});
		}

		function syncInterval(){
			interval = parseFloat($IO.val());
		    instance.emit('syncInterval', interval);
		}
	}

	//EventEmitter 클래스 상속
	IntervalGetView.prototype = _.clone(EventEmitter.prototype);

	return IntervalGetView;
});