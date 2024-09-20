// Initialize the map and set its view to India
var map = L.map("map").setView([20.5937, 78.9629], 5); // Coordinates for India

// Add a base layer (OpenStreetMap)
var baseLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }
).addTo(map);

// Add a scale control
L.control.scale().addTo(map);

// WMS Layer for India Country
var indiaCountryLayer = L.tileLayer.wms(
  "https://wms.qgiscloud.com/shubhamgeoinfo/Database_using_QGIS/",
  {
    layers: "India_country",
    format: "image/png",
    transparent: true,
    attribution: "QGIS Cloud",
  }
);

// WMS Layer for India State
var indiaStateLayer = L.tileLayer.wms(
  "https://wms.qgiscloud.com/shubhamgeoinfo/Database_using_QGIS/",
  {
    layers: "India_State",
    format: "image/png",
    transparent: true,
    attribution: "QGIS Cloud",
  }
);

// WMS Layer for India District
var indiaDistrictLayer = L.tileLayer.wms(
  "https://wms.qgiscloud.com/shubhamgeoinfo/Database_using_QGIS/",
  {
    layers: "India_District",
    format: "image/png",
    transparent: true,
    attribution: "QGIS Cloud",
  }
);

// WMS Layer for India Block
var indiaBlockLayer = L.tileLayer.wms(
  "https://wms.qgiscloud.com/shubhamgeoinfo/Database_using_QGIS/",
  {
    layers: "India_Block",
    format: "image/png",
    transparent: true,
    attribution: "QGIS Cloud",
  }
);

// Layer control to toggle between the different layers
var layersControl = L.control
  .layers(
    {
      OpenStreetMap: baseLayer,
    },
    {
      "India Country": indiaCountryLayer,
      "India State": indiaStateLayer,
      "India District": indiaDistrictLayer,
      "India Block": indiaBlockLayer,
    }
  )
  .addTo(map);

// Add default layers to the map
indiaCountryLayer.addTo(map); // Add India_Country layer as default
