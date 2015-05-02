define(['jquery', 'lodash', 'EventEmitter', 'tpl!/view/PageNavView/pageNav.tpl'],
	function($, _, EventEmitter, pageNavTpl){

	var id = 0;

	function getID(){
		return 'page_nav_IO_'+id;
	}

	function PageNaveView(dom){
		
		this.init    			= init;
		this.setCurrentNavNum  	= setCurrentNavNum;
		this.syncCurrentPage    = syncCurrentPage;
		this.draw 				= draw;

		var $container = $(dom);
		var instance = this;
		var currentNavNum = 0;
		var lastPageNum, viewPageNum,
			lastNavNum, viewNavHalfNum, viewNavNum, 
			startNavNum, endNavNum, 
			hasPreNav, hasNextNav;

		$container.on('click', '[page-nav]' , function(e){
			var page_nav = $(e.currentTarget).attr('page-nav');
			
			instance.setCurrentNavNum(page_nav);
			instance.draw();
			
			instance.syncCurrentPage();
		})

		function init(_currentNavNum, totalPageNum, _viewPageNum, _viewNavHalfNum){
			currentNavNum 	= parseInt(_currentNavNum);
			lastPageNum 	= parseInt(totalPageNum) - 1;
			viewPageNum 	= parseInt(_viewPageNum);
			viewNavHalfNum 	= parseInt(_viewNavHalfNum);

			_init();
			_resetValues();
		}

		function _init(){
			viewNavNum = viewNavHalfNum * 2 + 1;
			lastNavNum = Math.ceil((lastPageNum + 1) / viewNavNum - 1);
		}

		function setCurrentNavNum(page_nav){
			if(page_nav === 'start'){
				currentNavNum = 0;
			}else if(page_nav === 'pre-step'){
				currentNavNum = startNavNum - 1;
			}else if(page_nav === 'pre-page'){
				currentNavNum --;
			}else if(page_nav === 'next-page'){
				currentNavNum ++;
			}else if(page_nav === 'next-step'){
				currentNavNum = endNavNum + 1;
			}else if(page_nav === 'end'){
				currentNavNum = lastNavNum;
			}else{
				currentNavNum = parseInt(page_nav);
			}

			_resetValues();
		}

		function draw(){
			$container.html(pageNavTpl({
				startNavNum		: startNavNum,
				endNavNum		: endNavNum,
				hasPreNav		: hasPreNav,
				hasNextNav		: hasNextNav,
				currentNavNum 	: currentNavNum
			}));
		}


		function syncCurrentPage(){
			instance.emit('syncCurrentPage', currentNavNum);
		}

		function _checkCurrentNavNum(){
			if(currentNavNum < 0){
				currentNavNum = 0;
			}
			console.log(lastNavNum);
			if(currentNavNum > lastNavNum){
				currentNavNum = lastNavNum;
			}
		}

		function _resetValues(){
			_checkCurrentNavNum();

			var remainderNavNum;
			hasPreNav = true;
			hasNextNav = true;

			startNavNum = currentNavNum - viewNavHalfNum;
			remainderNavNum = viewNavHalfNum;
			if(startNavNum <= 0){
				remainderNavNum += (-startNavNum)
				startNavNum = 0;
				hasPreNav = false;
			}

			endNavNum = currentNavNum + remainderNavNum;

			if(endNavNum >= lastNavNum){
				startNavNum -= (endNavNum - lastNavNum);
				endNavNum = lastNavNum
				hasNextNav = false;
			}

			if(startNavNum <= 0){
				startNavNum = 0;
			}
		}
	}

	//EventEmitter 클래스 상속
	PageNaveView.prototype = _.clone(EventEmitter.prototype);

	return PageNaveView;
});