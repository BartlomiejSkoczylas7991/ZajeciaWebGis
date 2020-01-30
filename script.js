require (["esri/Map",
"esri/views/MapView",
"esri/WebMap",
"esri/widgets/BasemapGallery",
"esri/layers/FeatureLayer",
"esri/layers/GraphicsLayer"
, "esri/widgets/Sketch"],
function(Map, MapView, WebMap, BasemapGallery, GraphicsLayer, FeatureLayer, Sketch)
{
    
    let map1 = new Map({basemap:"satellite"});
    let map2 = new Map({basemap:"topo"});
    let map3 = new Map({basemap:"osm"});
    let map4 = new WebMap({portalItem:{id:"0466c523e5964bc194232d7394d518d4"}});
    let mapview = new MapView({
        container: "mapview",
        map:map1,
        center: [22.5666, 51.2500],
        zoom: 11
    });
    var graphics = new GraphicsLayer();
    

    document.getElementById('satellite').addEventListener('click',
        function (){
             mapview.map = map1;
         }
     );

    document.getElementById('topo').addEventListener('click',
        function (){
            mapview.map = map2;
        }
    );
        
    document.getElementById('osm').addEventListener('click',
        function (){
            mapview.map = map3;
        }
    );
    
    document.getElementById('agol').addEventListener('click',
        function (){
            mapview.map = map4;
        }
    );

    var trail = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
  
    });

    var sket = new Sketch({
        view: mapview,
        layer: graphics
  
      });

    var basem = new BasemapGallery({
        view: mapview,
        source:
         {
          portal: 
          {
            url: "http://www.arcgis.com",
            useVectorBasemaps: true
          }
        } 
      });
      
    mapview.ui.add(basem, "top-right");
    mapview.ui.add(sket, "bottom-right");
    map.add(trail);
});




