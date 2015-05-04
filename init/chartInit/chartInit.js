define([
    'AtomsphereModel',
    'ChartView',
    'TableView',
    'PageNavView',
    'ChartController'
],function(
    AtomsphereModel,
    ChartView,
    TableView,
    PageNavView,
    ChartController)
{
    function ChartInit(){
        var oAtomsphereModel    = new AtomsphereModel();
        var oChartView          = new ChartView('#chart');
        var oPageNavView        = new PageNavView('#nav');
        var oTableView          = new TableView('#detailTable');
        var oChartController    = new ChartController(oAtomsphereModel, oChartView, oTableView, oPageNavView);
       
        oChartController.init();
    }
    
    return ChartInit;
})