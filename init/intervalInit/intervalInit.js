define([
    'jquery', 
    'IntervalGetModel',
    'IntervalGetView',
    'IntervalGetController'
],function(
    $,
    IntervalGetModel,
    IntervalGetView,
    IntervalGetController)
{
    function intervalInit(){
        var oIntervalGetModel       = new IntervalGetModel();
        var oIntervalGetView        = new IntervalGetView($('#interval_IO_container')[0]);
        var oIntervalGetController  = new IntervalGetController(oIntervalGetModel, oIntervalGetView);
        oIntervalGetController.init();
    }
    
    return intervalInit;
})