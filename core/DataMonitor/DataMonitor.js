define(['IntervalGetModel', 'lodash', 'EventEmitter'], 
    function(IntervalGetModel, _, EventEmitter){

    var DataMonitor = (function(){
        var instance; //싱글톤 패턴용 변수

        var minDataCollection = {};
        var maxDataCollection = {};

        var parsedData, len, i, key, name, sort, minData, maxData;

        return function(){
            //싱글톤 패턴
            if(typeof instance === "object"){
                return instance;
            }
            instance = this;
            
            var oIntervalGetModel = new IntervalGetModel();
            oIntervalGetModel.on('getData', function(parsedDatas){
                len = parsedDatas.length;
                for(i = 0 ; i < len ; i++){
                    parsedData = parsedDatas[i];
                    name = parsedData['area name'];
                    
                    //console.log(parsedData);
                    if(minDataCollection[name] !== undefined){
                        //console.log('in min');
                        minData = minDataCollection[name];
                        for(sort in minData){
                            if(parsedData[sort] === undefined){
                                continue;
                            }

                            if(minData[sort] > parsedData[sort]){
                                instance.emit('min alarm', parsedDatas, i, name, sort);
                            }
                        }
                    }

                    //console.log(maxDataCollection , name);
                    if(maxDataCollection[name] !== undefined){
                        //console.log('in max');
                        maxData = maxDataCollection[name];
                        for(sort in maxData){
                            if(parsedData[sort] === undefined){
                                continue;
                            }

                            //console.log(maxData[sort] , parsedData[sort])
                            if(maxData[sort] < parsedData[sort]){
                                instance.emit('max alarm', parsedDatas, i, name, sort);
                            }
                        }
                    }
                }
            })
            
            this.setMin = function(name, sort, min){
                if(minDataCollection[name] === undefined){
                    minDataCollection[name] = {};
                }
                minDataCollection[name][sort] = min;
            }
            
            this.setMax = function(name, sort, max){
                if(maxDataCollection[name] === undefined){
                    maxDataCollection[name] = {};
                }
                maxDataCollection[name][sort] = max;
            }
        }
    })();

    DataMonitor.prototype = _.clone(EventEmitter.prototype);

return DataMonitor;
});