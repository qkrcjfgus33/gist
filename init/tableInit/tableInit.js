define([
    'Model',
    'TableView',
    'TableController'
],function(
    Model,
    TableView,
    TableController)
{
    function tableInit(){
        var oModel              = new Model();
        var oTableView          = new TableView('#current_table');
        var oTableController    = new TableController(oModel, oTableView);
        oTableController.init();
    }
    
    return tableInit;
})