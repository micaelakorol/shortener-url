export const geolocalization = () => {
  let previousLat = null;
  let previousLon = null;
  if (navigator.geolocation) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        // We check if the location has changed
        if (lat !== previousLat || lon !== previousLon) {
          console.log(lat, lon);
          // We update the previous location variables
          previousLat = lat;
          previousLon = lon;
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }
};
