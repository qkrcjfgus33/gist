define([
    'IntervalGetModel',
    'TableView',
    'TableController'
],function(
    IntervalGetModel,
    TableView,
    TableController)
{
    function tableInit(){
        var oIntervalGetModel = new IntervalGetModel();
        var oTableView        = new TableView('#current_table');
        var oTableController  = new TableController(oIntervalGetModel, oTableView);
        oTableController.init();
    }
    
    return tableInit;
})