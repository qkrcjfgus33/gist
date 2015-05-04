define([
    'AtomsphereModel',
    'TableView',
    'MinMaxTableController'
],function(
    AtomsphereModel,
    TableView,
    MinMaxTableController)
{
    function minMaxTableInit(){
        var oAtomsphereModel        = new AtomsphereModel();
        var oTableView              = new TableView('#table');
        var oMinMaxTableController  = new MinMaxTableController(oAtomsphereModel, oTableView);
       
        oMinMaxTableController.init();
    }
    
    return minMaxTableInit;
})