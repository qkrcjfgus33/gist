define([], function(){
	function splitSrl(srl){
		var srl_data = srl.split('_');
		return{
			latitude 	: srl_data[0],
			longitude 	: srl_data[1]
		}
	}

	return splitSrl;
})