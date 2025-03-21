ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-1.132499, 9.431078, -1.072877, 9.461237]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gps_survey_system_default_recording_3 = new ol.format.GeoJSON();
var features_gps_survey_system_default_recording_3 = format_gps_survey_system_default_recording_3.readFeatures(json_gps_survey_system_default_recording_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gps_survey_system_default_recording_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gps_survey_system_default_recording_3.addFeatures(features_gps_survey_system_default_recording_3);
var lyr_gps_survey_system_default_recording_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gps_survey_system_default_recording_3, 
                style: style_gps_survey_system_default_recording_3,
                popuplayertitle: 'gps_survey_system_default_recording',
                interactive: true,
                title: '<img src="styles/legend/gps_survey_system_default_recording_3.png" /> gps_survey_system_default_recording'
            });
var format_gps_survey_enumerator_recording_4 = new ol.format.GeoJSON();
var features_gps_survey_enumerator_recording_4 = format_gps_survey_enumerator_recording_4.readFeatures(json_gps_survey_enumerator_recording_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gps_survey_enumerator_recording_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gps_survey_enumerator_recording_4.addFeatures(features_gps_survey_enumerator_recording_4);
var lyr_gps_survey_enumerator_recording_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gps_survey_enumerator_recording_4, 
                style: style_gps_survey_enumerator_recording_4,
                popuplayertitle: 'gps_survey_enumerator_recording',
                interactive: true,
                title: '<img src="styles/legend/gps_survey_enumerator_recording_4.png" /> gps_survey_enumerator_recording'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_gps_survey_system_default_recording_3.setVisible(true);lyr_gps_survey_enumerator_recording_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_OSMStandard_2,lyr_gps_survey_system_default_recording_3,lyr_gps_survey_enumerator_recording_4];
lyr_gps_survey_system_default_recording_3.set('fieldAliases', {'community': 'community', 'household': 'household', 's_gpsblatitude': 's_gpsblatitude', 's_gpsblongitude': 's_gpsblongitude', 's_gpsbaltitude': 's_gpsbaltitude', 's_gpsbaccuracy': 's_gpsbaccuracy', });
lyr_gps_survey_enumerator_recording_4.set('fieldAliases', {'community': 'community', 'household': 'household', 'e_gpslatitude': 'e_gpslatitude', 'e_gpslongitude': 'e_gpslongitude', 'e_gpsaltitude': 'e_gpsaltitude', 'e_gpsaccuracy': 'e_gpsaccuracy', });
lyr_gps_survey_system_default_recording_3.set('fieldImages', {'community': 'TextEdit', 'household': 'Range', 's_gpsblatitude': 'TextEdit', 's_gpsblongitude': 'TextEdit', 's_gpsbaltitude': 'TextEdit', 's_gpsbaccuracy': 'TextEdit', });
lyr_gps_survey_enumerator_recording_4.set('fieldImages', {'community': 'TextEdit', 'household': 'Range', 'e_gpslatitude': 'TextEdit', 'e_gpslongitude': 'TextEdit', 'e_gpsaltitude': 'TextEdit', 'e_gpsaccuracy': 'TextEdit', });
lyr_gps_survey_system_default_recording_3.set('fieldLabels', {'community': 'inline label - always visible', 'household': 'inline label - always visible', 's_gpsblatitude': 'inline label - always visible', 's_gpsblongitude': 'inline label - always visible', 's_gpsbaltitude': 'no label', 's_gpsbaccuracy': 'inline label - always visible', });
lyr_gps_survey_enumerator_recording_4.set('fieldLabels', {'community': 'inline label - always visible', 'household': 'inline label - always visible', 'e_gpslatitude': 'inline label - always visible', 'e_gpslongitude': 'inline label - always visible', 'e_gpsaltitude': 'no label', 'e_gpsaccuracy': 'inline label - always visible', });
lyr_gps_survey_enumerator_recording_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});