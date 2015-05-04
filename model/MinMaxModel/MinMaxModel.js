define(['lodash', 'EventEmitter', 'joinSrl'], 
    function(_, EventEmitter, joinSrl){
    var root_path = "http://" + location.host;

    var MinMaxModel = (function(){
        var instance; //싱글톤 패턴용 변수
        
        var interval = 10000; //갱신주기
        var timeID = -1;

        return function(){
            //싱글톤 패턴
            if(typeof instance === "object"){
                return instance;
            }
            instance = this;

            // public methods
            
            this.
        }
    })();

    //EventEmitter 클래스 상속
    MinMaxModel.prototype = _.clone(EventEmitter.prototype);

    return MinMaxModel;
});