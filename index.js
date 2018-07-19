var selected = '';
var mymap = L.map('mapid', {editable:true}).setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic29lcjQ0MyIsImEiOiJjampvbnBwd20wMHA0M3ZvYnkxamRzeWgyIn0.Cgeft_nl8sS4ow4hujreVw'
}).addTo(mymap);

var options = {
    position: 'bottomright',
};

var drawnItems = new L.FeatureGroup();
mymap.addLayer(drawnItems);

var drawControl = new L.Control.Draw(options, {
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

//
// var latlngs = [
//     {lat: 51.501, lng:-0.06},
//     {lat: 51.490, lng: -0.06},
//     {lat: 51.490, lng: -0.02},
//     {lat: 51.501, lng: -0.02}
//     ];
// var polygon1 = L.polygon(latlngs, {color: '#3388FF'}).addTo(mymap);
// polygon1.enableEdit();

// [
//     {lat: 51.501, lng:-0.06},
//     {lat: 51.490, lng: -0.06},
//     {lat: 51.490, lng: -0.02},
//     {lat: 51.501, lng: -0.02}
// ];
var polygon1 = L.polygon( [
    {lat: 51.501, lng:-0.06},
    {lat: 51.490, lng: -0.06},
    {lat: 51.490, lng: -0.02},
    {lat: 51.501, lng: -0.02}
], {color: '#3388FF'}).addTo(mymap);
polygon1.enableEdit();



var latlngs2 = [
    [-54.826156, 291.65431],
    [-54.828678, 291.654782],
    [-54.829073, 291.660404],
    [-54.828085, 291.660748],
    [-54.826972, 291.659675],
];
var polygon2 = L.polygon(latlngs2, {color: '#3388FF'}).addTo(mymap);
polygon2.enableEdit();

var latlngs3 = [
    [40.402614, 49.830905],
    [40.401536, 49.831329],
    [40.401609, 49.831678],
    [40.402394, 49.831383],
    [40.402447, 49.831624],
    [40.402749, 49.831495],
];
var polygon3 = L.polygon(latlngs3, {color: '#3388FF'}).addTo(mymap);
polygon3.enableEdit();

var latlngs4 = [
    [-23.588629, -406.585658],
    [-23.584677, -406.582396],
    [-23.585385, -406.57907],
    [-23.589219, -406.583297],
];
var polygon4 = L.polygon(latlngs4, {color: '#3388FF'}).addTo(mymap);
polygon4.enableEdit();

var latlngs5 = [
    [0.000750, -78.452833],
    [-0.00300, -78.452833],
    [-0.00300, -78.449421],
    [0.000987, -78.449593],
];
var polygon5 = L.polygon(latlngs5, {color: '#3388FF'}).addTo(mymap);
polygon5.enableEdit();

function goToPoligonOne() {
    mymap.flyToBounds(polygon1);
    selected = JSON.stringify(polygon1.getLatLngs()[0].map((d) => ({lat: d.lat, lng: d.lng})));
    document.getElementById('selected').innerHTML = selected;
}
function goToPoligonTwo() {
    mymap.flyToBounds(polygon2);
    selected = JSON.stringify(polygon2.getLatLngs()[0].map((d) => ({lat: d.lat, lng: d.lng})));
    document.getElementById('selected').innerHTML = selected;
}
function goToPoligonThree() {
    mymap.flyToBounds(polygon3);
    selected = JSON.stringify(polygon3.getLatLngs()[0].map((d) => ({lat: d.lat, lng: d.lng})));
    document.getElementById('selected').innerHTML = selected;
}
function goToPoligonFour() {
    mymap.flyToBounds(polygon4);
    selected = JSON.stringify(polygon4.getLatLngs()[0].map((d) => ({lat: d.lat, lng: d.lng})));
    document.getElementById('selected').innerHTML = selected;
}
function goToPoligonFive() {
    mymap.flyToBounds(polygon5);
    selected = JSON.stringify(polygon5.getLatLngs()[0].map((d) => ({lat: d.lat, lng: d.lng})));
    document.getElementById('selected').innerHTML = selected;
}

polyLatLngs = [];
// var dPoly = L.polygon(polyLatLngs, {color: 'green'}).addTo(mymap);
// dPoly.enableEdit();

function showFunc() {
    var i =  document.getElementById('dPoly').value;
    polyLatLngs.push(i);
    JSON.parse(polyLatLngs[0]);
   var dPoly = L.polygon(polyLatLngs, {color: 'green'}).addTo(mymap);
    dPoly.enableEdit();
}
