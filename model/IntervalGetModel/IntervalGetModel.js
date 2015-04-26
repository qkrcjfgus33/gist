define(['lodash', 'EventEmitter'], 
    function(_, EventEmitter){
        
    var IntervalGetModel = (function(){
        var instance; //싱글톤 패턴용 변수
        
        var interval = 10000; //갱신주기
        var timeID = -1;

        return function(){
            //싱글톤 패턴
            if(typeof instance === "object"){
                return instance;
            }
            instance = this;

            this.stop           = stop;
            this.play           = play;
            this.setInterval    = setInterval;
            this.tryGet         = tryGet;

            /**
             * 갱신 중지
             */
            function stop(){
                if(timeID > -1){
                    clearTimeout(timeID);
                }
            }

            /**
             * 갱신 시작
             */
            function play(){
                instance.stop()
                timeID = setTimeout(getData, interval);
            }

            /**
             * 주기 설정
             * @param {float} time 주기
             */
            function setInterval(time){
                instance.stop();
                
                interval = time;
                instance.play();
            }

            /**
             * 주기에 상관없이 바로 값 받기
             */
            function tryGet(){
                //data 받기
                instance.stop();
                getData();
            }
        }

        /**
         * atomosphere정보 데이터 받는 함수
         * 값 받기에 성공시 값과 함께 getData emit 한다.
         * event 패턴으로. 외부에선 oDataController.on('getData', callback) 함수로 emit된 값을 받을수 있다.
         */
        function getData(){
            $.get("./sampleRandomData.php")
                .done(function(data) {
                    data = JSON.parse(decodeURIComponent(data));
                    joinSrl(data);

                    instance.emit('get data', data);
                    instance.play();
                });
        }

        var latitude, longitude;
        function joinSrl(data){
            len = data.length;
            _.forEach(data, function(item){
                latitude = item.latitude;
                longitude = item.longitude;
                item.srl = [latitude,longitude].join('_');
            });
        }
    })();

    //EventEmitter 클래스 상속
    IntervalGetModel.prototype = _.clone(EventEmitter.prototype);

    return IntervalGetModel;
});