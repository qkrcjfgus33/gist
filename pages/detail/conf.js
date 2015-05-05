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
        'getQueryVariable'  : 'common/getQueryVariable',
        'openPopup'         : 'common/openPopup',
        'joinSrl'           : 'common/joinSrl',
        'splitSrl'          : 'common/splitSrl',
        'datetimeFormat'    : 'common/datetimeFormat',

        //model
        'AtomsphereModel'   : 'model/AtomsphereModel/AtomsphereModel',


        //view
        'TableView'         : 'view/TableView/TableView',
        'ChartView'         : 'view/ChartView/ChartView',
        'PageNavView'       : 'view/PageNavView/PageNavView',

        //controller
        'ChartController'   : 'controller/ChartController/ChartController',

        //init
        'chartInit'     : 'init/chartInit/chartInit'
    }
});

//init.js에서 설정된 appInit 실행.
appInit();