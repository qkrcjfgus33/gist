//requireJS 기본 설정 부분
requirejs.config({
/*
    baseUrl:
    JavaScript 파일이 있는 기본 경로를 설정한다.
    만약 data-main 속성이 사용되었다면, 그 경로가 baseUrl이 된다.
    data-main 속성은 require.js를 위한 특별한 속성으로 require.js는 스크립트 로딩을 시작하기 위해 이 부분을 체크한다.
*/
    baseUrl: './lib',

/*
    paths: 
    path는 baseUrl 아래에서 직접적으로 찾을 수 없는 모듈명들을 위해 경로를 매핑해주는 속성이다.
    "/"로 시작하거나 "http" 등으로 시작하지 않으면, 기본적으로는 baseUrl에 상대적으로 설정하게 된다.

    paths: {
        "exam": "aaaa/bbbb"
    }

    의 형태로 설정한 뒤에, define에서 "exam/module" 로 불러오게 되면, 스크립트 태그에서는 실제로는 src="aaaa/bbbb/module.js" 로 잡을 것이다.
    path는 또한 아래와 같이 특정 라이브러리 경로 선언을 위해 사용될 수 있는데, path 매핑 코드는 자동적으로 .js 확장자를 붙여서 모듈명을 매핑한다.
*/
    paths:{
        'c3'            : 'c3-0.4.10/c3.min',
        'd3'            : 'd3/d3.min',
        'EventEmitter'  : 'EventEmitter/EventEmitter',
        'jquery'        : 'jQuery/jQuery',
        'lodash'        : 'lodash/lodash',

        'DataController': '../controller/DataController/DataController',
        'DataMonitor'   : '../controller/DataMonitor/DataMonitor',

        'MapView'       : '../view/MapView/MapView',
        'TableView'       : '../view/TableView/TableView',

        'AtomsphereModel': '../model/AtomsphereModel/AtomsphereModel'
    },

/*
    shim:
    AMD 형식을 지원하지 않는 라이브러리의 경우 아래와 같이 shim을 사용해서 모듈로 불러올 수 있다.
    참고 : http://gregfranko.com/blog/require-dot-js-2-dot-0-shim-configuration/

    shim:{
        'angular':{
            deps: ['jquery'], //angular가 로드되기 전에 jquery가 로드 되어야 한다.
            exports:'angular' //로드된 angular 라이브러리는 angular 라는 이름의 객체로 사용할 수 있게 해준다
        }
    }
    */
});

//requireJS를 활용하여 모듈 로드
requirejs(['jquery', 'DataController', 'DataMonitor', 'TableView', 'MapView', 'AtomsphereModel'],
    function($, DataController, DataMonitor, TableView, MapView, AtomsphereModel){
        //Init Objects
        var oDataController = new DataController();
        var oDataMonitor = new DataMonitor();
        var oTableView = new TableView('current_table');
        var oMapView = new MapView(35.225183, 126.841047, 'atmosphere_map');
        var oAtomsphereModel = new AtomsphereModel();

        //Init DOM
        var $intervalOption = $('#intervalOption');

        //Init Interval
        syncInterval();
        $intervalOption.on('change', syncInterval);
        oDataController.play();
        oDataController.tryGet();

        function syncInterval(){
            
            var interval = parseFloat($intervalOption.val());
            oDataController.setInterval(interval);
        }


        //Init Table
        oDataController.on('getData', function(data){
            var viewItem = ['area name', 'date', 'time', 'water temperature', 'pH', 'salinity', 'battery voltage'];
            oTableView.setData(data, viewItem);
        });


        //Init Map
        var viewItem = ['area name', 'water temperature', 'pH', 'salinity', 'battery voltage'];
        var maxWidth = 400;
        var len, i, areaData;
        oDataController.on('getData', function(data){
            oMapView.resetMarker();

            len = data.length;
            for(i = 0 ; i < len ; i++){
                areaData = data[i];
                oMapView.addMarker({
                    title       : areaData['area name'],
                    maxWidth    : maxWidth,
                    latitude    : areaData.latitude,
                    longitude   : areaData.longitude,
                    data        : _.pick(areaData, viewItem)
                });
            }
            
        });


        //Save Data
        oDataController.on('getData', function(data){
           // oAtomsphereModel.saveData(data)
        });
        //
        
});