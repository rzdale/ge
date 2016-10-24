function initMap() {

  var output = document.getElementById("error_output");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {

    var user_loc = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: user_loc
    });

    var marker = new google.maps.Marker({
      position: user_loc,
      map: map
    });

  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  navigator.geolocation.getCurrentPosition(success, error);

}
