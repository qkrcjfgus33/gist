define(['jquery', 'lodash', 'EventEmitter', 'tpl!/view/IntervalGetView/intervalIO.tpl'],
	function($, _, EventEmitter, intervalIOTpl){

	var id = 0;
	function getID(){
		return 'interval_IO_'+id;
	}

	function IntervalGetView(dom){
		var $container;
		var $IO;
		var instance = this;
		var id = getID();

		this.getDOMContainer    = getDOMContainer;
		this.setDOMContainer    = setDOMContainer;
		this.draw 				= draw;
		this.syncInterval 		= syncInterval;

		this.setDOMContainer(dom);

		function getDOMContainer(){
			return $container[0];
		}

		function setDOMContainer(dom){
			$container = $(dom);
		}

		function draw(secondList, unit){
			$container.html(intervalIOTpl({
				id 			: id,
				secondList 	: secondList,
				unit 		: unit
			}));

			$IO = $container.find('#'+id);

			$IO.on('change', function(){
				instance.syncInterval();
			});
		}

		function syncInterval(){
		    instance.emit('syncInterval', parseFloat($IO.val()));
		}
	}

	//EventEmitter 클래스 상속
	IntervalGetView.prototype = _.clone(EventEmitter.prototype);

	return IntervalGetView;
});