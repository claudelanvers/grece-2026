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
