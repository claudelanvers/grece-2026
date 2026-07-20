const map = L.map('map').setView([38.3, 22.0], 7);

// --- Fonds de carte ---

const osm = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
);

const positron = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '&copy; OpenStreetMap & CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }
);

const satellite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles © Esri'
    }
);
// =========================
// Icônes des points d'intérêt
// =========================

const icons = {

    antiquite: L.icon({
        iconUrl: 'assets/poi/antiquite.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    }),

    nature: L.icon({
        iconUrl: 'assets/poi/nature.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    }),

    chateau: L.icon({
        iconUrl: 'assets/poi/chateau.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    }),

    ville: L.icon({
        iconUrl: 'assets/poi/ville.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    }),

    pont: L.icon({
        iconUrl: 'assets/poi/pont.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    }),

    grotte: L.icon({
        iconUrl: 'assets/poi/grotte.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    })

};
// Fond affiché au démarrage
osm.addTo(map);
// Couche des points d'intérêt
const poiLayer = L.layerGroup().addTo(map);
const gpxGroup = L.featureGroup().addTo(map);
// Sélecteur de fonds
const overlays = {
    "📍 Points d'intérêt": poiLayer
};

L.control.layers(
    {
        "🗺 OpenStreetMap": osm,
        "🌍 Carte claire": positron,
        "🛰 Satellite": satellite
    },
    overlays,
    {
        collapsed: false
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
// =========================
// Ma position
// =========================

L.control.locate({
   position: 'topleft',
    flyTo: true,
    initialZoomLevel: 15,
    locateOptions: {
        enableHighAccuracy: true
    },
    strings: {
        title: "Ma position"
    }
}).addTo(map);
L.easyButton('fa-home', function () {
    map.fitBounds(gpxGroup.getBounds(), {
        padding: [20, 20]
    });
}, 'Afficher tout le parcours').addTo(map);
new L.GPX(
'gpx/a_j1_vers_margariti-24158784-1780826430-638.gpx',
{
  async: true,
  markers: {
    startIcon: null,
    endIcon: null,
    wptIcons: {},
    wptTypeIcons: {}
  },

  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
)
.on('loaded', function(e) {
  e.target.getLayers().forEach(function(layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });
}).addTo(gpxGroup);
new L.GPX(
'gpx/b_j2_vers_preveza-24158803-1780826447-167.gpx',
{
  async: true,
  markers: {
    startIcon: null,
    endIcon: null,
    wptIcons: {},
    wptTypeIcons: {}
  },
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/c_j3_vers_vassiliki-24158846-1780826452-622.gpx',
{
  async: true,
  markers: {
    startIcon: null,
    endIcon: null,
    wptIcons: {},
    wptTypeIcons: {}
  },
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).on('loaded', function(e) {
  e.target.getLayers().forEach(function(layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });
}).addTo(gpxGroup);
new L.GPX(
'gpx/d_j4_vers_poros-24212308-1780826457-677.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);

new L.GPX(
'gpx/e_j5_vers_zacharo-24158926-1780826461-994.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);

new L.GPX(
'gpx/f_j6_vers_pylos-24158965-1780826466-970.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/g_j7_vers_kalamata-24161278-1780826472-652.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/h_j8_vers_oitolou-24161332-1780826476-761.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/i_j9_vers_gythio-24161353-1780826480-121.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/j_j10_vers_kosmas-24161381-1780826485-761.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/k_j11_vers_astros-24161419-1780826489-993.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/l_j12_vers_nauplie-24161429-1780826495-955.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/m_j13_vers_corinthe-24161474-1780826499-584.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/n_j14_vers_diakopto-24161507-1780826504-461.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);
new L.GPX(
'gpx/o_j15_vers_patras-24161523-1780826509-105.gpx',
{
  async: true,
  markers: {
  startIcon: null,
  endIcon: null,
  wptIcons: {},
  wptTypeIcons: {}
},
  polyline_options: {
    color: '#1565C0',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round'
}
}
).addTo(gpxGroup);

 



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















const legend = L.control({position: 'bottomright'});

legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'info legend');
    div.style.background = 'rgba(255,255,255,0.95)';
  div.style.padding = '12px';
  div.style.border = '1px solid #999';
  div.style.borderRadius = '10px';
  div.style.boxShadow = '0 2px 8px rgba(0,0,0,0.30)';
  div.style.lineHeight = '1.6';
  div.style.fontSize = '14px';

 div.innerHTML = `
<div style="text-align:center;font-size:16px;font-weight:bold;margin-bottom:10px;">
Grèce 2026
</div>

<div style="display:flex;align-items:center;margin:6px 0;">
🚴 <span style="margin-left:8px;">Étapes</span>
</div>

<div style="display:flex;align-items:center;margin:6px 0;">
<img src="assets/poi/antiquite.svg" width="22" height="22">
<span style="margin-left:8px;">Antiquité</span>
</div>

<div style="display:flex;align-items:center;margin:6px 0;">
<img src="assets/poi/nature.svg" width="22" height="22">
<span style="margin-left:8px;">Nature</span>
</div>

<div style="display:flex;align-items:center;margin:6px 0;">
<img src="assets/poi/grotte.svg" width="22" height="22">
<span style="margin-left:8px;">Grotte</span>
</div>

<div style="display:flex;align-items:center;margin:6px 0;">
<img src="assets/poi/ville.svg" width="22" height="22">
<span style="margin-left:8px;">Ville</span>
</div>

<div style="display:flex;align-items:center;margin:6px 0;">
<img src="assets/poi/chateau.svg" width="22" height="22">
<span style="margin-left:8px;">Château</span>
</div>

<div style="display:flex;align-items:center;margin:6px 0;">
<img src="assets/poi/pont.svg" width="22" height="22">
<span style="margin-left:8px;">Pont remarquable</span>
</div>
`;
  return div;
};

legend.addTo(map);
L.control.scale({
    position: 'bottomleft',
    metric: true,
    imperial: false,
    maxWidth: 120
}).addTo(map);


 const etapes = [
{
  nom: "J1 – Margariti",
  coords: [39.3582, 20.4384],
  distance: "27,8 km",
  denivele: "484 m",
  hotel: "Palataki",
  openrunner: "24158784"
},
{
  nom: "J2 – Préveza",
  coords: [38.9597, 20.7517],
  distance: "66,3 km",
  denivele: "615 m",
  hotel: "Maissance",
  openrunner: "24158803"
},
{
  nom: "J3 – Vassiliki",
  coords: [38.6298, 20.6068],
  distance: "60,0 km",
  denivele: "613 m",
  hotel: "Elisso",
  openrunner: "24158846"
},
{
  nom: "J4 – Poros",
  coords: [38.1510, 20.7720],
  distance: "63,4 km",
  denivele: "1070 m",
  hotel: "Oceanis",
  openrunner: "24212308"
},
{
  nom: "J5 – Zacharo",
  coords: [37.4830, 21.6500],
  distance: "82,3 km",
  denivele: "486 m",
  hotel: "Rex",
  openrunner: "24158926"
},
  {
  nom: "J6 – Pylos",
  coords: [36.913, 21.696],
  distance: "81,1 km",
  denivele: "578 m",
  hotel: "Imathoessa",
  openrunner: "24158965"
},
{
  nom: "J7 – Kalamata",
  coords: [37.039, 22.114],
  distance: "51,6 km",
  denivele: "608 m",
  hotel: "Akti Taygetos",
  openrunner: "24161278"
},
{
  nom: "J8 – Oitylo",
  coords: [36.710, 22.396],
  distance: "68,6 km",
  denivele: "1147 m",
  hotel: "Porto Vitilo",
  openrunner: "24161332"
},
{
  nom: "J9 – Gythio",
  coords: [36.758, 22.565],
  distance: "54,3 km",
  denivele: "870 m",
  hotel: "Infinity",
  openrunner: "24161353"
},
{
  nom: "J10 – Kosmas",
  coords: [37.089, 22.729],
  distance: "52,5 km",
  denivele: "1370 m",
  hotel: "Xenonas Ouranogeiton",
  openrunner: "24161381"
},
{
  nom: "J11 – Astros",
  coords: [37.414, 22.765],
  distance: "77,4 km",
  denivele: "756 m",
  hotel: "Astros Beach Boutique",
  openrunner: "24161419"
},
{
  nom: "J12 – Nauplie",
  coords: [37.568, 22.806],
  distance: "33,2 km",
  denivele: "207 m",
  hotel: "Ippoliti",
  openrunner: "24161429"
},
{
  nom: "J13 – Corinthe",
  coords: [37.938, 22.932],
  distance: "52,0 km",
  denivele: "695 m",
  hotel: "Avenue Blue",
  openrunner: "24161474"
},
{
  nom: "J14 – Diakopto",
  coords: [38.192, 22.201],
  distance: "80,3 km",
  denivele: "276 m",
  hotel: "Porto & Mare",
  openrunner: "24161507"
},
{
  nom: "J15 – Patras",
  coords: [38.246, 21.734],
  distance: "59,7 km",
  denivele: "347 m",
  hotel: "Arrivée finale",
  openrunner: "24161523"
}
];
 
etapes.forEach(function(e) {

  L.marker(e.coords)
    .addTo(map)
    .bindPopup(
`<div style="
    min-width:285px;
    width:85vw;
    max-width:340px;
    padding:6px 4px;
    font-size:17px;
    line-height:1.6;
">

<h3 style="
    margin:0 0 12px 0;
    color:#0b5fa5;
    font-size:22px;
">
${e.nom}
</h3>

🚴 <b>Distance :</b> ${e.distance}<br>
⛰️ <b>D+ :</b> ${e.denivele}<br>
🛏️ <b>Hébergement :</b> ${e.hotel}

<div style="margin-top:16px;text-align:center;">
<a href="https://www.openrunner.com/route-details/${e.openrunner}"
   target="_blank"
   style="
      display:inline-block;
      padding:10px 18px;
      background:#0b5fa5;
      color:white;
      text-decoration:none;
      border-radius:8px;
      font-weight:bold;
   ">
📍 Parcours OpenRunner
</a>
</div>

</div>`);

});

// ===========================
// POINTS D'INTÉRÊT TOURISTIQUES
// ===========================

function ajouterPOI(poi) {

    let etoiles = "";
    for (let i = 0; i < poi.etoiles; i++) {
        etoiles += "⭐";
    }

    const popup = `
        <div class="poi-popup">

            <h3 style="margin:0;color:#0b5fa5;font-size:18px;">
${poi.nom}
<hr style="border:none;border-top:1px solid #ddd;margin:8px 0;">

<p style="margin:8px 0;line-height:1.4;">
${poi.description}
</p>
          

            <div style="font-size:18px;margin:8px 0;">
                ${etoiles}
            </div>

            <div style="background:#eef6ff;padding:6px;border-radius:6px;margin:8px 0;">
                ⏱️ Durée : ${poi.duree}
            </div>

            <div style="
display:flex;
gap:10px;
margin-top:12px;
">

<a href="${poi.wiki}" target="_blank"
style="
flex:1;
text-align:center;
background:#0b5fa5;
color:white;
padding:10px;
border-radius:8px;
text-decoration:none;
font-weight:bold;
font-size:15px;">
📖 Wikipédia
</a>

<a href="${poi.maps}" target="_blank"
style="
flex:1;
text-align:center;
background:#28a745;
color:white;
padding:10px;
border-radius:8px;
text-decoration:none;
font-weight:bold;
font-size:15px;">
🗺️ Itinéraire
</a>

</div>
    `;

   let options = {};

if (poi.categorie && icons[poi.categorie]) {
    options.icon = icons[poi.categorie];
}

L.marker(poi.coords, options)
    .addTo(poiLayer)
    .bindPopup(popup);

}
ajouterPOI({

    nom: "🏛️ Messène antique",
    categorie: "antiquite",

    coords: [37.1778, 21.9325],

    description:
        "L'un des sites antiques les mieux conservés de Grèce.",

    duree: "2 à 3 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Mess%C3%A8ne",

    maps: "https://maps.google.com/?q=37.1778,21.9325"

});
ajouterPOI({

    nom: "🏖️ Plage de Voidokilia",
    categorie: "nature",

    coords: [36.9629, 21.6576],

    description:
        "Une plage mythique en forme d'oméga, considérée comme l'une des plus belles de Grèce. Panorama exceptionnel sur la lagune de Gialova.",

    duree: "30 min à 1 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Voidokili%C3%A1",

    maps: "https://maps.google.com/?q=36.9629,21.6576"

});
ajouterPOI({

    nom: "🌉 Pont Rio-Antirrio",
    categorie: "pont",

    coords: [38.3156, 21.7804],

    description:
        "L'un des plus grands ponts haubanés du monde. Il relie le Péloponnèse à la Grèce continentale.",

    duree: "15 à 30 min",

    etoiles: 4,

    wiki: "https://fr.wikipedia.org/wiki/Pont_R%C3%ADo-Ant%C3%ADrrio",

    maps: "https://maps.google.com/?q=38.3156,21.7804"

});
ajouterPOI({

    nom: "🦁 Mycènes",
    categorie: "antiquite",
    

    coords: [37.7308, 22.7546],

    description:
        "Ancienne cité du roi Agamemnon, célèbre pour la Porte des Lions et les tombes royales. Classée au patrimoine mondial de l'UNESCO.",

    duree: "2 à 3 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Myc%C3%A8nes",

    maps: "https://maps.google.com/?q=37.7308,22.7546"

});
ajouterPOI({

    nom: "🎭 Théâtre d'Épidaure",
    categorie: "antiquite",

    coords: [37.5964, 23.0785],

    description:
        "Le théâtre antique le mieux conservé de Grèce, réputé pour son acoustique exceptionnelle. Site inscrit au patrimoine mondial de l'UNESCO.",

    duree: "1 h 30 à 2 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Th%C3%A9%C3%A2tre_d%27%C3%89pidaure",

    maps: "https://maps.google.com/?q=37.5964,23.0785"

});
ajouterPOI({

    nom: "🚢 Canal de Corinthe",

    coords: [37.9339, 22.9922],

    description:
        "Canal long de 6,3 km creusé dans la roche, reliant le golfe de Corinthe à la mer Égée. Impressionnant point de vue depuis le pont.",

    duree: "20 à 30 min",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Canal_de_Corinthe",

    maps: "https://maps.google.com/?q=37.9339,22.9922"

});
ajouterPOI({

    nom: "🏛️ Corinthe antique",
    categorie: "antiquite",

    coords: [37.9058, 22.8792],

    description:
        "Important site archéologique dominé par l'Acrocorinthe. On y découvre l'agora, le temple d'Apollon et les vestiges de la cité antique.",

    duree: "2 à 3 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Corinthe_antique",

    maps: "https://maps.google.com/?q=37.9058,22.8792"

});
ajouterPOI({

    nom: "🏛️ Palais de Nestor",
    categorie: "antiquite",

    coords: [36.9576, 21.6956],

    description:
        "Le plus beau palais mycénien de Grèce, attribué au légendaire roi Nestor. Fresques, salles du trône et tablettes en linéaire B.",

    duree: "1 h à 1 h 30",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Palais_de_Nestor",

    maps: "https://maps.google.com/?q=36.9576,21.6956"

});
ajouterPOI({

    nom: "🚂 Gorges du Vouraïkos",
    categorie: "nature",

    coords: [38.0308, 22.1932],

    description:
        "Magnifiques gorges parcourues par le célèbre train à crémaillère reliant Diakopto à Kalávryta.",

    duree: "2 à 4 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Voura%C3%AFkos",

    maps: "https://maps.google.com/?q=38.0308,22.1932"

});
ajouterPOI({

    nom: "⚓ Pylos",
    categorie: "ville",

    coords: [36.9139, 21.6969],

    description:
        "Charmante ville portuaire dominée par le château de Niokastro et ouverte sur la baie de Navarin.",

    duree: "1 à 2 h",

    etoiles: 4,

    wiki: "https://fr.wikipedia.org/wiki/Pylos",

    maps: "https://maps.google.com/?q=36.9139,21.6969"

});
ajouterPOI({

    nom: "🦩 Lagune de Gialova",
    categorie: "nature",

    coords: [36.9589, 21.6905],

    description:
        "Zone humide protégée, refuge de nombreuses espèces d'oiseaux migrateurs, au bord de la baie de Navarin.",

    duree: "30 min à 1 h",

    etoiles: 4,

    wiki: "https://fr.wikipedia.org/wiki/Lagune_de_Gialova",

    maps: "https://maps.google.com/?q=36.9589,21.6905"

});
ajouterPOI({

    nom: "🏘️ Nauplie",
    categorie: "ville",

    coords: [37.5673, 22.8016],

    description:
        "Première capitale de la Grèce moderne. Jolie vieille ville vénitienne, ruelles animées et forteresse de Palamède.",

    duree: "2 à 4 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Nauplie",

    maps: "https://maps.google.com/?q=37.5673,22.8016"

});
ajouterPOI({

    nom: "🏛️ Athènes",
    categorie: "antiquite",

    coords: [37.9715, 23.7267],

    description:
        "Capitale de la Grèce et berceau de la démocratie. À ne pas manquer : l'Acropole, le Parthénon et le quartier de Pláka.",

    duree: "1 journée",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Ath%C3%A8nes",

    maps: "https://maps.google.com/?q=37.9715,23.7267"

});
ajouterPOI({

    nom: "🏰 Mistra",
    categorie: "chateau",

    coords: [37.0737, 22.3663],

    description:
        "Magnifique cité byzantine classée au patrimoine mondial de l'UNESCO, avec palais, monastères et églises dominant la vallée de Sparte.",

    duree: "2 à 3 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Mistra",

    maps: "https://maps.google.com/?q=37.0737,22.3663"

});
ajouterPOI({

    nom: "🛶 Grottes de Diros",
    categorie: "grotte",

    coords: [36.6708, 22.4774],

    description:
        "Spectaculaires grottes partiellement inondées, que l'on visite en barque. L'un des plus beaux sites naturels du Péloponnèse.",

    duree: "1 h à 1 h 30",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Grottes_de_Diros",

    maps: "https://maps.google.com/?q=36.6708,22.4774"

});
ajouterPOI({

    nom: "🛶 Grotte de Melissani",
    categorie: "grotte",

    coords: [38.2570, 20.6236],

    description:
        "Lac souterrain aux eaux turquoise, visité en barque. L'un des sites naturels les plus spectaculaires de Céphalonie.",

    duree: "30 à 45 min",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Grotte_de_Meliss%C3%A1ni",

    maps: "https://maps.google.com/?q=38.2570,20.6236"

});
ajouterPOI({

    nom: "⚓ Gythio",
    categorie: "ville",

    coords: [36.7569, 22.5648],

    description:
        "Charmant port de pêche de Laconie, ancienne base navale de Sparte. Front de mer animé, maisons néoclassiques et îlot de Cranaé.",

    duree: "1 à 2 h",

    etoiles: 4,

    wiki: "https://fr.wikipedia.org/wiki/Gythio",

    maps: "https://maps.google.com/?q=36.7569,22.5648"

});
ajouterPOI({

    nom: "🏰 Monemvasia",
    categorie: "chateau",

    coords: [36.6877, 23.0565],

    description:
        "Spectaculaire cité médiévale fortifiée bâtie sur un immense rocher relié au continent par une chaussée. L'un des plus beaux villages historiques de Grèce.",

    duree: "2 à 4 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Monemvasia",

    maps: "https://maps.google.com/?q=36.6877,23.0565"

});
ajouterPOI({

    nom: "🌴 Kalamata",
    categorie: "ville",

    coords: [37.0389, 22.1142],

    description:
        "Capitale de la Messénie, réputée pour ses olives, son agréable front de mer, son centre historique et le château médiéval qui domine la ville.",

    duree: "2 à 3 h",

    etoiles: 4,

    wiki: "https://fr.wikipedia.org/wiki/Kalamata",

    maps: "https://maps.google.com/?q=37.0389,22.1142"

});
ajouterPOI({

    nom: "🏛️ Olympie",

categorie: "antiquite",

    coords: [37.6379, 21.6300],

    description:
        "Berceau des Jeux olympiques antiques. Le vaste site archéologique comprend le temple de Zeus, le stade antique et un remarquable musée.",

    duree: "3 à 4 h",

    etoiles: 5,

    wiki: "https://fr.wikipedia.org/wiki/Olympie",

    maps: "https://maps.google.com/?q=37.6379,21.6300"

});
