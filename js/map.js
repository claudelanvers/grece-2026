const map = L.map('map').setView([38.3, 22.0], 7);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution: '© OpenStreetMap'
}
).addTo(map);

const igoumenitsa = L.marker([39.503, 20.263])
.addTo(map)
.bindPopup('Départ : Igoumenitsa');

const patras = L.marker([38.246, 21.734])
.addTo(map)
.bindPopup('Arrivée : Patras');

const group = L.featureGroup([
igoumenitsa,
patras
]);

map.fitBounds(group.getBounds(), {
padding: [50, 50]
});
setTimeout(() => {
  map.invalidateSize();
}, 500);
new L.GPX(
'gpx/a_j1_vers_margariti-24158784-1780826430-638.gpx',
{
async: true,

}
).on('loaded', function(e) {
map.fitBounds(e.target.getBounds());
}).addTo(map);
L.marker([39.3858, 20.4387])
.addTo(map)
.bindPopup("MARQUEUR TEST CLAUDE");
