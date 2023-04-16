const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoid3lyY2FuIiwiYSI6ImNsZ2pvZzJ3dTB0OGMza252bGFjdTB5dWsifQ.EJAB06pKFrnm05REE4-Lvg";

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
