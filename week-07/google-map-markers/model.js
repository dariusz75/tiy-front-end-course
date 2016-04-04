/// Fn's dealing with Model

var Model = (function model() {
  var markersModel = {};  

  function removeMarkerFromModel(markerId) {
    delete markersModel[markerId];
  }

  function addMarkerToTheModel(markerId, markerData) {
    markersModel[markerId] = markerData;
  }

  function createMarkerId(latitude, longitude) {
    return (latitude.toString() + longitude.toString());
  }

  function getMarkerById(markerId) {
    return markersModel[markerId];
  }

  function getMarkers() {
    return markersModel;
  }

  return {
    removeMarkerFromModel: removeMarkerFromModel,
    addMarkerToTheModel: addMarkerToTheModel,
  createMarkerId: createMarkerId,
  getMarkerById: getMarkerById,
  getMarkers: getMarkers  
  };
})();
