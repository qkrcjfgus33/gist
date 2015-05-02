define([
    'IntervalGetModel',
    'MapView',
    'MapController'
],function(
    IntervalGetModel,
    MapView,
    MapController)
{
    function mapInit(){
        var oIntervalGetModel   = new IntervalGetModel();
        var oMapView            = new MapView('#current_map');
        var oMapController      = new MapController(oIntervalGetModel, oMapView);
        oMapController.init();
    }
    
    return mapInit;
})