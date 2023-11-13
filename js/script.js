function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.8349, lng: -87.6270},
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: {lat: 41.8349, lng: -87.6270},
    map: map,
    title: 'Marker'
  });

  const flightPlanCoordinates = [
    { lat: 41.839463, lng: -87.623614 },
    { lat: 41.839463, lng: -87.629494 },
    { lat: 41.831108, lng: -87.629494 },
    { lat: 41.831108, lng: -87.625978 },
    { lat: 41.832899, lng: -87.625978 },
    { lat: 41.832899, lng: -87.623614 },
    { lat: 41.839463, lng: -87.623614 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2.5,
  });

  flightPath.setMap(map);
}
window.initMap = initMap;