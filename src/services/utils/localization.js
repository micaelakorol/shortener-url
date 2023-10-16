export const geolocalization = () => {
  let previousLat = null;
  let previousLon = null;
  if (navigator.geolocation) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        if (lat !== previousLat || lon !== previousLon) {
          console.log(lat, lon);
          previousLat = lat;
          previousLon = lon;
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }
};
