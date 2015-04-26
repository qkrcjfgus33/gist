define([
    'jquery', 
    'AtomsphereModel',
    'ChartView',
    'PageNavView',
    'ChartController'
],function(
    $,
    AtomsphereModel,
    ChartView,
    PageNavView,
    ChartController)
{
    function ChartInit(){
        var oAtomsphereModel    = new AtomsphereModel();
        var oChartView          = new ChartView($('#chart')[0]);
        var oPageNavView        = new PageNavView($('#nav')[0]);
        var oChartController    = new ChartController(oAtomsphereModel, oChartView, oPageNavView);
       
        oChartController.init();
    }
    
    return ChartInit;
})