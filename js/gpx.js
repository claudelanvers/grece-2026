new L.GPX(
'gpx/a_j1_vers_margariti-24158784-1780826430-638.gpx',
{
  async: true,
  marker_options: {
    startIconUrl: null,
    endIconUrl: null,
    shadowUrl: null,
    wptIconUrls: false
  }
}
)
.on('loaded', function(e) {

    setTimeout(function() {

        Object.values(e.target._layers).forEach(function(layer) {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

    }, 100);

}).addTo(map);
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
new L.GPX(
'gpx/m_j13_vers_corinthe-24161474-1780826499-584.gpx',
{
  async: true,
  polyline_options: {
    color: 'darkred',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/n_j14_vers_diakopto-24161507-1780826504-461.gpx',
{
  async: true,
  polyline_options: {
    color: 'darkgreen',
    weight: 5
  }
}
).addTo(map);
new L.GPX(
'gpx/o_j15_vers_patras-24161523-1780826509-105.gpx',
{
  async: true,
  polyline_options: {
    color: 'black',
    weight: 5
  }
}
).addTo(map);
L.circleMarker([39.3858, 20.4387], {
  radius: 12,
  color: 'orange'
})
.addTo(map)