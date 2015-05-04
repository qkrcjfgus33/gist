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

		this.loadData = function(sendData){
			var deferred = $.Deferred();

			$.get(root_path+'/loadData.php', sendData)
				.done(function(data){
					deferred.resolve(JSON.parse(decodeURIComponent(data)));
				})
				.fail(function(err){
					deferred.reject(err);
				});
			return deferred.promise();
		}

		this.getTotalPageNum = function(sendData){

			return $.get(root_path+'/getTotalPageNum.php', sendData);
		}
	}

	return AtomsphereModel;
});