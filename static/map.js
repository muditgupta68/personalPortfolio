const mapInit=()=>{
    const lat = 28.640740086914814;
    const long = 77.06775521327664;
    const zoom = 10;

    let mymap = L.map('map').setView([lat,long], zoom);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibXVkaXRndXB0YTY4IiwiYSI6ImNrdG9ldzcxdzAyMzIyb2wzb3Z3YTliaWQifQ.OVwhmFtNr0zrb7f34shqlQ'
    }).addTo(mymap);

    var myIcon = L.icon({
    iconUrl: '../static/icon.svg',
    iconSize: [30, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

    var marker = L.marker([lat, long], {icon: myIcon}).addTo(mymap);

    // default marker
    // L.marker([lat, long]).addTo(mymap);
    marker.bindPopup("<b>Mudit gupta</b><br>Hi! I am here.").openPopup();
}

mapInit();