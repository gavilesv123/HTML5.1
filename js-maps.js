      var map;
      function initMap() 
      {
        var pyrmont ={lat: -2.168773, lng: -79.917083};
        var panel = document.getElementById('map');
        map  = new google.maps.Map(panel, {
          center: pyrmont,
          zoom: 15
        });
        infowindow = new google.maps.InfoWindow();

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location:pyrmont,
          radius: 500,
          types:['store']
        },callback);
    }
        function callback (results, status){

          if(status==google.maps.places.PlacesServiceStatus.OK){
            for(var i=0; i<results.length;i++){
              createMarker(results[i]);
            }
          }
        }

        function createMarker(place){

          var placeLoc = place.geometry.location;//lugar lagtitud longitud se crsr el marcador
          var marker = new google.maps.Marker({
            map:map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function(){
          infowindow.setContent(place.name);
          infowindow.open(map,this); 

          var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: placeLoc,
              pov: {
                heading: 34,
                pitch: 10
              }
            });
          map.setStreetView(panorama);

          });

        }
        