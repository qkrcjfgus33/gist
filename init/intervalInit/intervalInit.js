define([
    'Model',
    'TimeSelectView',
    'IntervalView',
    'IntervalGetController',
],function(
    Model,
    TimeSelectView,
    IntervalView,
    IntervalGetController)
{
    function intervalInit(){
        var oModel                      = new Model();
        var oTimeSelectView             = new TimeSelectView('#interval_IO_container');
        var oIntervalView               = new IntervalView();
        var oIntervalGetController      = new IntervalGetController(oModel, oTimeSelectView, oIntervalView);
        oIntervalGetController.init();
    }
    
    return intervalInit;
})