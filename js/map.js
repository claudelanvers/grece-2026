const map = L.map('map').setView([38.3, 22.0], 7);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution: '© OpenStreetMap'
}
).addTo(map);

L.marker([39.503, 20.263])
.addTo(map)
.bindPopup('Départ : Igoumenitsa');

L.marker([38.246, 21.734])
.addTo(map)
.bindPopup('Arrivée : Patras');
