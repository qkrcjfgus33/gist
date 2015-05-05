define(['lodash', 'EventEmitter'], function(_, EventEmitter){
	var path = "http://" + location.host + '/model/Model';
	var instance; //싱글톤 패턴용 변수

	function Model(){
		//싱글톤 패턴
		if(typeof instance === "object"){
		    return instance;
		}
		instance = this;

		this.get = get;
		this.set = set;
		this.onGet = onGet;

		var lastData = {};

		function get(data_str, sendData){
			sendData = (typeof sendData === 'object')? sendData : {};

			return $.getJSON(path+'/get'+data_str+'.php', sendData)
				.done(function(data){
					lastData[data_str] = data;
					instance.emit('get'+data_str, data);
				})
		}

		function set(data_str, sendData){
			sendData = (typeof sendData === 'object')? sendData : {};

			return $.getJSON(path+'/set'+data_str+'.php', sendData);
		}

		function onGet(data_str, callback){
			instance.on('get'+data_str, callback);
			if(typeof lastData[data_str] !== "undefined"){
				callback(lastData[data_str]);
			}
		}
	}

	//EventEmitter 클래스 상속
	Model.prototype = _.clone(EventEmitter.prototype);

	return Model;
});