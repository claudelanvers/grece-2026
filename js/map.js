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
L.circleMarker([39.3858, 20.4387], {
  radius: 12,
  color: 'orange'
})
.addTo(map)
.bindPopup('<b>Palataki</b><br>Margariti');

L.circleMarker([38.9597, 20.7517], {
  radius: 12,
  color: 'orange'
})
.addTo(map)
.bindPopup('<b>Maissance</b><br>Préveza');

L.circleMarker([38.6298, 20.6068], {
  radius: 12,
  color: 'orange'
})
.addTo(map)
.bindPopup('<b>Elisso</b><br>Vassiliki');
L.marker([38.151, 20.772])
.addTo(map)
.bindPopup('<b>Oceanis</b><br>Poros');

L.marker([37.483, 21.650])
.addTo(map)
.bindPopup('<b>Rex</b><br>Zacharo');

L.marker([36.913, 21.696])
.addTo(map)
.bindPopup('<b>Imathoessa</b><br>Pylos');

L.marker([37.039, 22.114])
.addTo(map)
.bindPopup('<b>Akti Taygetos</b><br>Kalamata');

L.marker([36.710, 22.396])
.addTo(map)
.bindPopup('<b>Porto Vitilo</b><br>Oitylo');

L.marker([36.758, 22.565])
.addTo(map)
.bindPopup('<b>Infinity</b><br>Gythio');

L.marker([37.089, 22.729])
.addTo(map)
.bindPopup('<b>Apollo Guest House</b><br>Kosmas');

L.marker([37.414, 22.765])
.addTo(map)
.bindPopup('<b>Astros Beach Boutique</b><br>Astros');

L.marker([37.568, 22.806])
.addTo(map)
.bindPopup('<b>Ippoliti</b><br>Nauplie');

L.marker([37.938, 22.932])
.addTo(map)
.bindPopup('<b>Avenue Blue</b><br>Corinthe');

L.marker([38.192, 22.201])
.addTo(map)
.bindPopup('<b>Porto & Mare</b><br>Diakopto');

L.marker([38.246, 21.734])
.addTo(map)
.bindPopup('<b>Arrivée finale</b><br>Patras');
L.circleMarker([37.0272, 21.695], {
  radius: 10,
  color: 'lime',
  fillColor: 'lime',
  fillOpacity: 0.8
})
.addTo(map)

.bindPopup(`
  <b>🏛️ Palais de Nestor</b><br>
  Site mycénien près de Pylos.<br>
  <a href="https://fr.wikipedia.org/wiki/Palais_de_Nestor"
     target="_blank">
     Wikipédia
  </a>
`);
L.circleMarker([37.7308, 22.7547], {
  radius: 10,
  color: 'lime',
  fillColor: 'lime',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🏛️ Mycènes</b><br>
  Site archéologique majeur de l'Argolide.<br>
  <a href="https://fr.wikipedia.org/wiki/Myc%C3%A8nes"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([37.5960, 23.0738], {
  radius: 11,
  color: 'yellow',
  fillColor: 'yellow',
  fillOpacity: 0.8
})
.addTo(map)

.bindPopup(`
  <b>🏛️ Épidaure</b><br>
  Théâtre antique et sanctuaire d'Asclépios.<br>
  <a href="https://fr.wikipedia.org/wiki/%C3%89pidaure"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([37.9338, 22.9958], {
  radius: 10,
  color: 'green',
  fillColor: 'green',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🏛️ Canal de Corinthe</b><br>
  Canal reliant le golfe de Corinthe à la mer Égée.<br>
  <a href="https://fr.wikipedia.org/wiki/Canal_de_Corinthe"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([38.2676, 20.6255], {
  radius: 10,
  color: 'cyan',
  fillColor: 'cyan',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🌊 Grotte de Melissani</b><br>
  Lac souterrain spectaculaire sur l'île de Céphalonie.<br>
  <a href="https://fr.wikipedia.org/wiki/Grotte_de_Melissani"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([36.6705, 22.3725], {
  radius: 10,
  color: 'cyan',
  fillColor: 'cyan',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🌊 Grottes de Diros</b><br>
  Réseau de grottes marines parmi les plus célèbres de Grèce.<br>
  <a href="https://fr.wikipedia.org/wiki/Grottes_de_Diros"
     target="_blank">
     📖 Wikipédia
  </a>
`);
