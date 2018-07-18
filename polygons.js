
var polygon = new L.polygon([
    [51.501, -0.015],
    [51.501, -0.065],
    [51.508, -0.04],
    // [51.503, -0.47]
]).addTo(mymap);
polygon.enableEdit();

var latlngs = [
    [51.501, -0.06],
    [51.490, -0.06],
    [51.490, -0.02],
    [51.501, -0.02]];
var polygon = L.polygon(latlngs, {color: 'purple'}).addTo(mymap);
polygon.enableEdit();

