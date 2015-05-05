define(['lodash', 'EventEmitter'], 
    function(_, EventEmitter){

    function IntervalView(){
        // private
        var instance = this;

        var interval = 0;
        var timeID = -1;

        var term = 0;
        var termTimeID = -1;
        var percent = 0;

        var statusOption = {
            stop        : 1,
            play        : 2
        }
        var status = statusOption.stop;

        // public methods
        this.draw           = draw;
        this.stop           = stop;
        this.play           = play;
        this.setIntervalTime    = setIntervalTime;
        this.fire           = fire;

        function draw(){

        }

        /**
         * 갱신 중지
         */
        function stop(){
            if(status === statusOption.play){
                clearTimeout(timeID);
                clearInterval(termTimeID);
                percent = 0;
                status = statusOption.stop;
            }
        }

        /**
         * 갱신 시작
         */
        function play(){
            instance.stop()

            if(interval <= 0){
                throw Error('설정된 interval값이 없거나 0보다 작습니다.');
                return;
            }

            termTimeID = setInterval(termFire, term);
            timeID = setTimeout(_fire, interval);

            status = statusOption.play;
        }

        /**
         * 주기 설정
         * @param {float} time 주기
         */
        function setIntervalTime(time){
            instance.stop();
            
            interval = time;
            term = interval/100;
        }

        /**
         * 주기에 상관없이 바로 실행
         */
        function fire(){
            //console.log('fire');
            instance.emit('fire');
        }

        function _fire(){
            instance.stop();
            fire();
            instance.play();
        }

        function termFire(){
            //percent++;
            //instance.emit('term', percent);
        }
    }

    //EventEmitter 클래스 상속
    IntervalView.prototype = _.clone(EventEmitter.prototype);

    return IntervalView;
});