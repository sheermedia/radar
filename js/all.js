//
//function allowDrop(ev)
//{
//ev.preventDefault();
//}
//
//var touchzone = document.getElementById('#circle');
//touchzone.addEventListener('touchstart',drag, false);
//
//function drag(ev){
//	alert();
//	ev.dataTransfer.setData("Text",ev.target.id);
//}
//
//function drop(ev)
//{
//ev.preventDefault();
//var data=ev.dataTransfer.getData("Text");
//ev.target.appendChild(document.getElementById(data));
//location.href = '#map';
//}

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
