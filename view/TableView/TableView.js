define(['jquery', 'lodash'], function($, _){

function TableView(id){
	var $table = $('#'+id);
	
	var keys, key, keyLen, i, dataLen, j, html;

	var clickDetailTagList = [
		'.water_temperature',
		'.pH',
		'.salinity',
		'.battery_voltage'
	];

	clickDetailTagList = clickDetailTagList.join(',');
	$table.on('click', clickDetailTagList, function(e){
		console.log(e);
	});

	this.setData = function(data, viewItem){
		//keys = getKeys(data);
		keys = viewItem;
		keyLen = keys.length;
		html = '<tbody><tr>';
		for(i = 0 ; i < keyLen ; i++){
			html += ('<td>' + keys[i] + '</td>');
		}
		html += '</tr><tr>';

		dataLen = data.length;
		for(i = 0 ; i < dataLen ; i++){
			html += '<tr>';
			for(j = 0 ; j < keyLen ; j++){
				if(data[i][keys[j]] === undefined){
					html += ('<td></td>');
				}
				html += ('<td class="'+keys[j].replace(/\s/,'_')+'">' + data[i][keys[j]] + '</td>');
			}
			html += '</tr>';
		}
		html += '</tr></tbody>';
		$table.html(html);
	}

	function getKeys(obj){
		keys = [];
		keyLen = obj.length;
		for(i = 0 ; i < keyLen ; i++){
			Array.prototype.push.apply(keys, _.keys(obj[i]));
		}
		return _.uniq(keys);
	}
}

return TableView;
});