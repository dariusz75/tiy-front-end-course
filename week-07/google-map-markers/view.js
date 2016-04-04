 var map;
/// Functions dealing with UI > to be exported to a .js file ///
  function createMap() {
    map = new google.maps.Map(document.querySelector('[data-js-map]'), {
      center: {
        lat: 51.50,
        lng: 0.12
      },
      zoom: 1
    });
  }
  
  
  function removeMarkerFromTheMap(marker) {
    marker.setMap(null);
  }
  function createMarkerOnTheMap(map, latitude, longitude) {
    var marker = new google.maps.Marker({
      position: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
      },
      map: map
    });
    marker.addListener('click', hanldeMarkerClickEvent);
    return marker;
  }
  function createPositionBox(latitude,longitude){
    var boxId = Model.createMarkerId(latitude,longitude);
    var source = $("#box-template").html();
    var template = Handlebars.compile(source);
    var context = {
      boxId: boxId
    };
    var html = template(context);
  $('form').after(html);
  }
  function removeBox(boxId) {
  $('[data-box-id="' + boxId + '"]').remove();
  }
  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10,
      values: [ 0, 10 ],
      slide: function( event, ui ) {
        $( "#rating" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#rating" ).val($( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  });

  function hanldeMarkerClickEvent(clickEvent) {
    var latitude = clickEvent.latLng.lat();
    var longitude = clickEvent.latLng.lng();
    var markerId = Model.createMarkerId(latitude, longitude);
    var boxId = Model.createMarkerId(latitude,longitude);
    var marker = Model.getMarkerById(markerId); 
    removeMarkerFromTheMap(marker.marker);
    Model.removeMarkerFromModel(markerId);
    removeBox(boxId);
  }
  $('form').on('submit', function handleSubmitEvent(submitEvent) {
    submitEvent.preventDefault();
    var latitude = $('[data-js-latitude-input]').val();
    var longitude = $('[data-js-longitude-input]').val();
    var description = $('[data-js-description]').val();
    var googleMapsMarker = createMarkerOnTheMap(map, latitude, longitude);
    var markerId = Model.createMarkerId(latitude, longitude);
    createPositionBox(latitude,longitude);
    Model.addMarkerToTheModel(markerId, {
      latitude: latitude,
      longitude: longitude,
      description: description,
      marker: googleMapsMarker
    });
  });