// Initialize the map and set its view to your chosen geographical coordinates and a zoom level
var mymap = L.map('map').setView([51.505, -0.09], 2);

// Add OpenStreetMap tiles to your map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(mymap);

// Function to add a marker to the map upon clicking
function onMapClick(e) {
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap)
        .bindPopup("You visited here!").openPopup();
}

// Attach the 'click' event listener to the map
mymap.on('click', onMapClick);
