define(['jquery'], function($){

	function AtomsphereModel(){
		this.addArea = function(){
			//필요하나?
		}
		this.removeArea = function(){
			//필요하나?
		}
		this.saveData = function(data){
			//필요하나?
			$.get('./saveData.php', {data: data})
				.done(function(output){
					console.log(output);
				});
		}
		this.loadData = function(){
			var deferred = $.Deferred();

			setTimeout(function(){
				var fakeData = {};
				// defer 이용해서 데이터 넘겨주자...
				// 가짜루.
			},1000);

			return deferred.promise();
		}
	}

	return AtomsphereModel;
});