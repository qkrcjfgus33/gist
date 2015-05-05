define([
    'Model',
    'MapView',
    'MapController'
],function(
    Model,
    MapView,
    MapController)
{
    function mapInit(){
        var oModel              = new Model();
        var oMapView            = new MapView('#current_map');
        var oMapController      = new MapController(oModel, oMapView);
        oMapController.init();
    }
    
    return mapInit;
})