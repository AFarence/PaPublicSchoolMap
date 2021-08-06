mapboxgl.accessToken = 'pk.eyJ1IjoiYWZhcmVuY2UiLCJhIjoiY2tpaWNmZXNrMGF1bzJzcW1uMGRiZnRpbCJ9.uopR-f-9VC4hwT7aEGQpxg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/afarence/ckry8lla501k217s132e0j3pc',
    zoom: 7,
    center: [-77.45, 40.725]
});
map.on('load', function(){
    
    map.addLayer({
        'id':'schooldata',
        'type':'fill',
        'source': {
            'type':'geojson',
            'data':'dataframe.geojson'
        },
        'paint':{
            'fill-color':'#0276FD',
            'fill-opacity': ['interpolate',['linear'],['get','B14001_001E'],
1000,0.25,
2000000,0.95]

        }
    }, );
})

map.on('click', 'schooldata', function (e) {
    var entriesDiff = e.features[0].properties.B14001_001E;
    var districtName = e.features[0].properties.NAME;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h2>' + districtName + '</h2>' +  '<h3><hr>' +  entriesDiff.toLocaleString() + ' Students' + '</h3>')
        .addTo(map);
});
map.on('mouseenter', 'schooldata', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'schooldata', function () {
    map.getCanvas().style.cursor = '';
});
