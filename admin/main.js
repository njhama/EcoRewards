const API_KEY = "pk.eyJ1Ijoibmlja3loYW1hIiwiYSI6ImNsMHIwbDY0dTJmaXIzYm41ZmMydHdlNHQifQ.s0e5ntX9Pp0nJur9tPv2Bw";

//CODE
mapboxgl.accessToken = API_KEY;

const map = new mapboxgl.Map
({
    container: 'map',
    style: 'mapbox://styles/nickyhama/cl2f6k55u000014qqkyfv26ml',
    center: [0, 0],
    zoom: 1
});

const port = 9000;
const socket = io("ws://localhost:" + port);
socket.on('location2', data => {
    console.log('sdfd')
    console.log('location data received:', data);
    flyToLoc(data)
    // do something with the location data, e.g. store it in a database, or send it to other clients
});


const markers = []

function flyToLoc(data) {
    marker = new mapboxgl.Marker({
        color: "#5E9DAD",
        draggable: false
    }).setLngLat([data.lng, data.lat])
    .addTo(map)

    markers.push(marker)
}


function removeMarkers() {
    markers.forEach(marker => marker.remove());
    markers.length = 0;
}