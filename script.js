const MAPBOX_ACCESS_TOKEN = "ADD KEY HERE";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControls();
  map.addControl(navigationControls);
}

function successLocation(position) {
  setupMap(position.coords.longitude, position.coords.latitude);
}

function errorLocation() {
  //defualt to manchester
  setupMap([-2.24, 53.48]);
}
