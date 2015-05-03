define(['jquery', 'splitSrl'], function($, splitSrl){
	var root_path = "http://" + location.host;

	function AtomsphereModel(){
		this.addArea = function(){
			//필요하나?
		}
		this.removeArea = function(){
			//필요하나?
		}
		this.saveData = function(data){

		}

		this.loadData = function(input){
			var deferred = $.Deferred();
			var position = splitSrl(input.srl);
			var sendData = {
				startPageNum 	: input.startPageNum,
				viewPageNum		: input.viewPageNum,
				latitude		: position.latitude,
				longitude		: position.longitude
			}

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
			var sendData = splitSrl(input.srl);

			return $.get(root_path+'/getTotalPageNum.php', sendData);
		}
	}

	return AtomsphereModel;
});