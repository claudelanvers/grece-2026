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
async: true
}
).addTo(map);

new L.GPX(
'gpx/b_j2_vers_preveza-24158803-1780826447-167.gpx',
{
async: true,
polyline_options: {
color: 'red',
weight: 5
}
}
).addTo(map);
new L.GPX(
'gpx/c_j3_vers_vassiliki-24158846-1780826452-622.gpx',
{
async: true,
polyline_options: {
color: 'green',
weight: 6
}
}
).addTo(map);
