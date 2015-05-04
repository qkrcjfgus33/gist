define([
    'IntervalGetModel',
    'MinMaxView',
    'MinMaxController'
],function(
    IntervalGetModel,
    MinMaxView,
    MinMaxController)
{
    function minMaxInit(){
        var oIntervalGetModel  = new IntervalGetModel();
        var oMinMaxView        = new MinMaxView('#MinMaxAlram');
        var oMinMaxController  = new MinMaxController(oIntervalGetModel, oMinMaxView);
        oMinMaxController.init();
    }
    
    return minMaxInit;
})