var selected = [];
var dPoly = [];
var mymap = L.map('mapid', {editable:true}).setView([51.505, -0.09], 13);

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
    console.log(e.layer.getLatLngs());
    dPoly = e.layer;
    if (type === 'marker') {
    }
    drawnItems.addLayer(layer);
});

mymap.on('draw:edited', function(e) {
    layers = e.layers;
    layers.eachLayer(function(layer){
        console.log(layer.getLatLngs())
    });
});

mymap.on('draw:deleted', function () {
});

function showFunc() {
    document.getElementById('dPoly').innerHTML = dPoly.getLatLngs();
}

function saveFunc() {}

var latlngs = [
    [51.501, -0.06],
    [51.490, -0.06],
    [51.490, -0.02],
    [51.501, -0.02]];
var polygon1 = L.polygon(latlngs, {color: '#3388FF'}).addTo(mymap);
polygon1.enableEdit();

var latlngs2 = [
    [-22.570922, 17.058442],
    [-22.571794, 17.059579],
    [-22.572547, 17.062368],
    [-22.57223, 17.06445],
    [-22.569456, 17.064428],
];
var polygon2 = L.polygon(latlngs2, {color: '#3388FF'}).addTo(mymap);
polygon2.enableEdit();

function goToPointOne() {
    mymap.flyToBounds(polygon1);
}
function goToPointTwo() {
    mymap.flyToBounds(polygon2);
}