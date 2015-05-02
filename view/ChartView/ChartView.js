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

			var datetimeList = ['datetime'];
			var waterTemperatureList = ['수온'];
			var pHList = ['Ph'];
			var salinity = ['염분'];
			var batteryVoltage = ['전압'];

			var len = data.length;
			for(var i = 0 ; i<len ; i++){
				datetimeList.push(getDatetime(data, i));
				waterTemperatureList.push(data[i]['water temperature']);
				pHList.push(data[i]['pH']);
				salinity.push(data[i]['salinity']);
				batteryVoltage.push(data[i]['battery voltage']);
			}

			var chart = c3.generate({
				bindto: $ChartContainer[0],
				data: {
					x: 'datetime',
					//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
					columns: [
						datetimeList,
						waterTemperatureList,
						pHList,
						salinity,
						batteryVoltage]//
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

	function getDatetime(data, i){
		var date = (data[i]['date']).split('-');
		var time = (data[i]['time']).split(':');
		var dateTime = new Date();

		dateTime.setFullYear(date[0]);
		dateTime.setMonth(date[1]);
		dateTime.setDate(date[2]);
		dateTime.setHours(time[0]);
		dateTime.setMinutes(time[1]);
		dateTime.setSeconds(time[2]);

		return (+dateTime);
	}

	return ChartView;
});