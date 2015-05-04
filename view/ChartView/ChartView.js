define(['jquery', 'c3'],
	function($, c3){

	function ChartView(selector){
		this.draw = draw;

		var $ChartContainer = $('<section></section>');
		var $TitleContainer = $('<h1></h1>');

		var $DOMContainer = $(selector);
		$DOMContainer.append($TitleContainer);
		$DOMContainer.append($ChartContainer);

		//json등 지원하는 값이 많으므로 로딩시간 단축 및 유지보수를 위해 수정 필요 (가져오는값이 정확히 정해질시)
		function draw(option){
			var title = option.title;
			var data = option.data;

			var len = data.length;
			for(var i = 0 ; i < len ; i++){
				data[i].datetime = +new Date(data[i].datetime);
			}
			
			var chart = c3.generate({
				bindto: $ChartContainer[0],
				data: {
					//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
					json: data,
					keys: {
						x: 'datetime',
					      // x: 'name', // it's possible to specify 'x' when category axis
					      value: ['수온', 'pH', '염분', '전압'],
					}
				},
				axis: {
				    x: {
				        type: 'timeseries',
				        tick: {
				            format: '%Y-%m-%d %H:%M:%S'
				        }
				    }
				}
    		});

			$TitleContainer.text(title);

			return chart;
		}
	}

	return ChartView;
});