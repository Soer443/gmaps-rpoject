
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic29lcjQ0MyIsImEiOiJjampvbnBwd20wMHA0M3ZvYnkxamRzeWgyIn0.Cgeft_nl8sS4ow4hujreVw'
}).addTo(mymap);

var drawnItems = new L.FeatureGroup();
mymap.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
mymap.addControl(drawControl);

mymap.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {

    }


    drawnItems.addLayer(layer);
});

mymap.on('draw:edited', function () {

});

mymap.on('draw:deleted', function () {

});

var polygon = L.polygon([
    [51.501, -0.015],
    [51.501, -0.065],
    [51.508, -0.04],
    // [51.503, -0.47]
]).addTo(mymap);

var latlngs = [
    [51.501, -0.06],
    [51.490, -0.06],
    [51.490, -0.02],
    [51.501, -0.02]];
var polygon = L.polygon(latlngs, {color: 'purple'}).addTo(mymap);
