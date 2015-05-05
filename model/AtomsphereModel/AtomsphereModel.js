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
			return $.getJSON(root_path+'/loadData.php', sendData);
		}

		this.loadAtomsphereList = function(){
			return $.getJSON(root_path+'/loadAtomsphereList.php');
		}

		this.loadAtomsphereMinMax = function(){
			return $.getJSON(root_path+'/loadAtomsphereMinMax.php');
		}

		this.getTotalPageNum = function(sendData){

			return $.get(root_path+'/getTotalPageNum.php', sendData);
		}
	}

	return AtomsphereModel;
});