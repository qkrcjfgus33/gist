define(['jquery', 'lodash', 'EventEmitter', 'tpl!view/TableView/table.tpl'],
	function($, _, EventEmitter, tableTpl){

	var clickDetailTagList = [
	    "[infoType='water temperature']",
	    "[infoType='pH']",
	    "[infoType='salinity']",
	    "[infoType='battery voltage']"
	];

	clickDetailTagList = clickDetailTagList.join(',');

	function TableView(selector){
		this.draw = draw;

		var $container = $(selector);
		var instance = this;

		/**
		 * data를 세팅하고 화면에 표시.
		 * @param {Array} data     세팅할 데이터
		 * @param {Array} viewList 표시할 값 종류
		 */
		function draw(option){
			$container.html(tableTpl(option));
		}
	}

	//EventEmitter 클래스 상속
	TableView.prototype = _.clone(EventEmitter.prototype);

	return TableView;
});