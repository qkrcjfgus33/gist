define([
    'Model',
    'AlramView',
    'MinMaxAlramController'
],function(
    Model,
    AlramView,
    MinMaxAlramController)
{
    function minMaxInit(){
        var oModel                  = new Model();
        var oAlramView              = new AlramView('#MinMaxAlram');
        var oMinMaxAlramController  = new MinMaxAlramController(oModel, oAlramView);
        oMinMaxAlramController.init();
    }
    
    return minMaxInit;
})