define(['jquery', 'lodash', 'tpl!view/TableView/table.tpl'],
	function($, _, tableTpl){

	function TableView(dom){
		var $container;

		this.getDOMContainer 	= getDOMContainer;
		this.setDOMContainer 	= setDOMContainer;
		this.draw 				= draw;
		this.openDetailPopup 	= openDetailPopup;

		this.setDOMContainer(dom);

		function getDOMContainer(){
			return $container[0];
		}

		function setDOMContainer(dom){
			$container = $(dom);
		}

		/**
		 * data를 세팅하고 화면에 표시.
		 * @param {Array} data     세팅할 데이터
		 * @param {Array} viewList 표시할 값 종류
		 */
		function draw(data, viewList, transList){
			$container.html(tableTpl({
				data 		: data,
				viewList 	: viewList,
				transList 	: transList
			}));
		}

		/**
		 * 자세히 보기 팝업을 연다.
		 * @param  {int} srl DataController에서 정해지는 고유값.
		 */
		function openDetailPopup(srl, title){
			var popUrl = "pages/detail/detail.html";
			var popOption = "width=1000, height=800, resizable=no, scrollbars=no, status=no;";

			window.open(popUrl+'?t='+(new Date()-0)+'&srl='+srl+'&title='+title,"",popOption);
		}
	}

	return TableView;
});