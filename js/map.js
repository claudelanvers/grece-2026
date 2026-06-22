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
new L.GPX(
'gpx/d_j4_vers_poros-24212308-1780826457-677.gpx',
{
  async: true,
  polyline_options: {
    color: 'purple',
    weight: 5
  }
}
).addTo(map);

new L.GPX(
'gpx/e_j5_vers_zacharo-24158926-1780826461-994.gpx',
{
  async: true,
  polyline_options: {
    color: 'orange',
    weight: 5
  }
}
).addTo(map);

new L.GPX(
'gpx/f_j6_vers_pylos-24158965-1780826466-970.gpx',
{
  async: true,
  polyline_options: {
    color: 'brown',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/g_j7_vers_kalamata-24161278-1780826472-652.gpx',
{
  async: true,
  polyline_options: {
    color: 'darkblue',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/h_j8_vers_oitolou-24161332-1780826476-761.gpx',
{
  async: true,
  polyline_options: {
    color: 'darkmagenta',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/i_j9_vers_gythio-24161353-1780826480-121.gpx',
{
  async: true,
  polyline_options: {
    color: 'darkcyan',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/j_j10_vers_kosmas-24161381-1780826485-761.gpx',
{
  async: true,
  polyline_options: {
    color: 'deeppink',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/k_j11_vers_astros-24161419-1780826489-993.gpx',
{
  async: true,
  polyline_options: {
    color: 'gold',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/l_j12_vers_nauplie-24161429-1780826495-955.gpx',
{
  async: true,
  polyline_options: {
    color: 'navy',
    weight: 5
  }
}
).addTo(map);
gpx/m_j13_vers_corinthe-24161474-1780826499-584.gpx
L.circleMarker([39.3858, 20.4387], {
  radius: 12,
  color: 'orange'
})
.addTo(map)
  gpx/n_j14_vers_diakopto-24161507-1780826504-461.gpx
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
L.circleMarker([37.9715, 23.7267], {
  radius: 11,
  color: 'green',
  fillColor: 'green',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🏛️ Acropole d'Athènes</b><br>
  Le monument emblématique de la Grèce antique.<br>
  <a href="https://fr.wikipedia.org/wiki/Acropole_d%27Ath%C3%A8nes"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([37.567, 22.801], {
  radius: 8,
  color: 'orange',
  fillColor: 'orange',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🏙️ Nauplie</b><br>
  Première capitale de la Grèce moderne.<br>
  <a href="https://fr.wikipedia.org/wiki/Nauplie"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([36.758, 22.565], {
  radius: 8,
  color: 'orange',
  fillColor: 'orange',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🏙️ Gythio</b><br>
  Ancien port de Sparte et charmante ville du Magne.<br>
  <a href="https://fr.wikipedia.org/wiki/Gythio"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([37.039, 22.114], {
  radius: 8,
  color: 'orange',
  fillColor: 'orange',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🏙️ Kalamata</b><br>
  Capitale de la Messénie, célèbre pour ses olives.<br>
  <a href="https://fr.wikipedia.org/wiki/Kalamata"
     target="_blank">
     📖 Wikipédia
  </a>
`);
L.circleMarker([36.960, 21.655], {
  radius: 10,
  color: 'cyan',
  fillColor: 'cyan',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(`
  <b>🌊 Lagune de Gialova</b><br>
  Réserve naturelle et zone humide remarquable de Messénie.<br>
  <a href="https://fr.wikipedia.org/wiki/Lagune_de_Gialova"
     target="_blank">
     📖 Wikipédia
  </a>
`);
const legend = L.control({position: 'bottomright'});

legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'info legend');
  div.style.background = 'white';
  div.style.padding = '10px';
  div.style.border = '2px solid #ccc';
  div.style.borderRadius = '5px';

  div.innerHTML = `
    <h4>Grèce 2026</h4>
    🚴 Étapes GPX<br>
    🏨 Hôtels<br>
    🏛️ Sites historiques<br>
    🌊 Sites naturels
  `;

  return div;
};

legend.addTo(map);
