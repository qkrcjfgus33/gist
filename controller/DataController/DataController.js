define(['lodash', 'EventEmitter'], 
    function(_, EventEmitter){
        
    var DataController = (function(){
        var instance;
        
        var interval = 10000;
        var timeID = -1;
        return function(){
            if(typeof instance === "object"){
                return instance;
            }
            instance = this;
            
            this.stop = function(){
                if(timeID > -1){
                    clearTimeout(timeID);
                }
            }

            this.play = function(){
                instance.stop()
                timeID = setTimeout(getData, interval);
            }
            
            this.setInterval = function(time){
                instance.stop();
                
                interval = time;
                instance.play();
            }
            
            this.tryGet = function(){
                //data 받기
                instance.stop();
                getData();
            }
        }

        function getData(){
            $.get("./sampleRandomData.php")
                .done(function(data) {
                    instance.emit('getData', 
                        JSON.parse(decodeURIComponent(data)));
                    instance.play();
                });
        }
    })();

    DataController.prototype = _.clone(EventEmitter.prototype);
    return DataController;
});