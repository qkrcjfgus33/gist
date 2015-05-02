//requireJS 기본 설정 부분
//파일들의 경로 설정이라고 보면 됨.
requirejs.config({
    paths:{
        'c3'                : 'lib/c3-0.4.10/c3.min',
        'd3'                : 'lib/d3/d3.min',
        'EventEmitter'      : 'lib/EventEmitter/EventEmitter',
        'jquery'            : 'lib/jQuery/jQuery',
        'lodash'            : 'lib/lodash/lodash',
        'tpl'               : 'lib/requirejs-tpl/tpl',

        'getQueryVariable'  : 'common/getQueryVariable',
        'openPopup'         : 'common/openPopup',

        'AtomsphereModel'   : 'model/AtomsphereModel/AtomsphereModel',
        'IntervalGetModel'  : 'model/IntervalGetModel/IntervalGetModel',
        'MinMaxModel'       : 'model/MinMaxModel/MinMaxModel',

        'MapView'           : 'view/MapView/MapView',
        'TableView'         : 'view/TableView/TableView',
        'IntervalGetView'   : 'view/IntervalGetView/IntervalGetView',
        'ChartView'         : 'view/ChartView/ChartView',
        'PageNavView'       : 'view/PageNavView/PageNavView',

        'MapController'     : 'controller/MapController/MapController',
        'TableController'   : 'controller/TableController/TableController',
        'IntervalGetController'   : 'controller/IntervalGetController/IntervalGetController',
        'ChartController'   : 'controller/ChartController/ChartController',

        'intervalInit'  : 'init/intervalInit/intervalInit',
        'tableInit'     : 'init/tableInit/tableInit',
        'mapInit'       : 'init/mapInit/mapInit',
        'chartInit'     : 'init/chartInit/chartInit'
    }
});

//init.js에서 설정된 appInit 실행.
appInit();