//requireJS 기본 설정 부분
//파일들의 경로 설정이라고 보면 됨.
requirejs.config({
    paths:{
        //lib
        'c3'                : 'lib/c3-0.4.10/c3.min',
        'd3'                : 'lib/d3/d3.min',
        'EventEmitter'      : 'lib/EventEmitter/EventEmitter',
        'jquery'            : 'lib/jQuery/jQuery',
        'lodash'            : 'lib/lodash/lodash',
        'tpl'               : 'lib/requirejs-tpl/tpl',
        'MarkerWithLabel'   : 'lib/MarkerWithLabel/MarkerWithLabel',
        'datetimepicker'    : 'lib/jquery.datetimepicker/jquery.datetimepicker',

        //common
        'customLinkPopup'   : 'common/customLinkPopup',

        //model
        'Model'             : 'model/Model/Model',

        //view
        'TimeSelectView'    : 'view/TimeSelectView/TimeSelectView',
        'IntervalView'      : 'view/IntervalView/IntervalView',
        'AlramView'         : 'view/AlramView/AlramView',
        'TableView'         : 'view/TableView/TableView',
        'MapView'           : 'view/MapView/MapView',

        //controller
        'IntervalGetController'     : 'controller/IntervalGetController/IntervalGetController',
        'MinMaxAlramController'     : 'controller/MinMaxAlramController/MinMaxAlramController',
        'TableController'           : 'controller/TableController/TableController',
        'MapController'             : 'controller/MapController/MapController',
        
        //init
        'intervalInit'      : 'init/intervalInit/intervalInit',
        'minMaxInit'        : 'init/minMaxInit/minMaxInit',
        'tableInit'         : 'init/tableInit/tableInit',
        'mapInit'           : 'init/mapInit/mapInit'
    }
});

//init.js에서 설정된 appInit 실행.
appInit();