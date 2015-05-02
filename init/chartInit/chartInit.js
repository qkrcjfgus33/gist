define([
    'AtomsphereModel',
    'ChartView',
    'PageNavView',
    'ChartController'
],function(
    AtomsphereModel,
    ChartView,
    PageNavView,
    ChartController)
{
    function ChartInit(){
        var oAtomsphereModel    = new AtomsphereModel();
        var oChartView          = new ChartView('#chart');
        var oPageNavView        = new PageNavView('#nav');
        var oChartController    = new ChartController(oAtomsphereModel, oChartView, oPageNavView);
       
        oChartController.init();
    }
    
    return ChartInit;
})