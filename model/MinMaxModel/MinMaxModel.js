define(['lodash', 'EventEmitter'], 
    function(_, EventEmitter){

    function MinMaxModel(){
        
        var min = 0;
        var max = 0;

        this.check  = check;
        this.setMin = setMin;
        this.setMax = setMax;

        function check(val){
            var isMin = min > val;
            var isMax = max < val;
            if(isMin){
                this.emit('min')
            }

            if(isMax){
                this.emit('max')
            }

            if(!isMin && !isMax){
                this.emit('pass')
            }
        }

        function setMin(_min){
            min = _min
        }

        function setMax(_max){
            max = _max
        }
    }

    //EventEmitter 클래스 상속
    MinMaxModel.prototype = _.clone(EventEmitter.prototype);

    return MinMaxModel;
});