$(document).ready(function(e) {
    $('#pastryBtn, #cakeBtn, #flowerBtn, #giftBtn').draggable({
			revert : true,
			containment: "parent"
		});
	$('.drophere').droppable({
		 drop:function(){
			 	location.href = "#map"
			 } 
		})
});

$(document).on("pageinit", "#category", function () {
         $('#pastryBtn, #cakeBtn, #flowerBtn, #giftBtn').draggable({
			revert : true,
			containment: "parent"
		});
    });
//==================================================== Google Maps Script ========================================================
function initialize() {
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(-25.363882, 131.044922)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: 'Click to zoom'
  });

  google.maps.event.addListener(map, 'center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
	location.href = "#chooseItem"
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).bind('pageinit', function () {
    $.mobile.defaultPageTransition = 'none';
});