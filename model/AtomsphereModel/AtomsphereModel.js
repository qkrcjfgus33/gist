define(['jquery'], function($){
	var root_path = "http://" + location.host;

	function AtomsphereModel(){
		this.addArea = function(){
			//필요하나?
		}
		this.removeArea = function(){
			//필요하나?
		}
		this.saveData = function(data){
			
			$.get(root_path+'/saveData.php', {data: data})
				.done(function(output){
					console.log(output);
				});

		}

		this.loadData = function(input){
			var deferred = $.Deferred();
			var sendData = srlConvertData(input.srl);
			sendData.startPageNum = input.startPageNum;
			sendData.viewPageNum = input.viewPageNum;

			$.get(root_path+'/loadData.php', sendData)
				.done(function(data){
					deferred.resolve(JSON.parse(decodeURIComponent(data)));
				})
				.fail(function(err){
					deferred.reject(err);
				});
			return deferred.promise();
		}

		this.getTotalPageNum = function(input){
			var sendData = srlConvertData(input.srl);

			return $.get(root_path+'/getTotalPageNum.php', sendData);
		}
	}

	function srlConvertData(srl){
		var srl_data = srl.split('_');
		return{
			latitude 	: srl_data[0],
			longitude 	: srl_data[1]
		}
	}

	return AtomsphereModel;
});