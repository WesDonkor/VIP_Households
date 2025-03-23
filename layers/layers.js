ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-0.922516, 9.380754, -0.684027, 9.501388]);
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
var format_SystempinnedGPS_230325_3 = new ol.format.GeoJSON();
var features_SystempinnedGPS_230325_3 = format_SystempinnedGPS_230325_3.readFeatures(json_SystempinnedGPS_230325_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SystempinnedGPS_230325_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SystempinnedGPS_230325_3.addFeatures(features_SystempinnedGPS_230325_3);
var lyr_SystempinnedGPS_230325_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SystempinnedGPS_230325_3, 
                style: style_SystempinnedGPS_230325_3,
                popuplayertitle: 'System pinned GPS_230325',
                interactive: true,
    title: 'System pinned GPS_230325<br />\
    <img src="styles/legend/SystempinnedGPS_230325_3_0.png" /> Completed<br />\
    <img src="styles/legend/SystempinnedGPS_230325_3_1.png" /> None of the eating groups qualify<br />' });
var format_EnumPinnedGPS_230325_4 = new ol.format.GeoJSON();
var features_EnumPinnedGPS_230325_4 = format_EnumPinnedGPS_230325_4.readFeatures(json_EnumPinnedGPS_230325_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EnumPinnedGPS_230325_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnumPinnedGPS_230325_4.addFeatures(features_EnumPinnedGPS_230325_4);
var lyr_EnumPinnedGPS_230325_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnumPinnedGPS_230325_4, 
                style: style_EnumPinnedGPS_230325_4,
                popuplayertitle: 'Enum Pinned GPS_230325',
                interactive: true,
    title: 'Enum Pinned GPS_230325<br />\
    <img src="styles/legend/EnumPinnedGPS_230325_4_0.png" /> Completed<br />\
    <img src="styles/legend/EnumPinnedGPS_230325_4_1.png" /> None of the eating groups qualify<br />' });
var format_VIP_new_CommunityList_NoNewCommunities_5 = new ol.format.GeoJSON();
var features_VIP_new_CommunityList_NoNewCommunities_5 = format_VIP_new_CommunityList_NoNewCommunities_5.readFeatures(json_VIP_new_CommunityList_NoNewCommunities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_VIP_new_CommunityList_NoNewCommunities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIP_new_CommunityList_NoNewCommunities_5.addFeatures(features_VIP_new_CommunityList_NoNewCommunities_5);
var lyr_VIP_new_CommunityList_NoNewCommunities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIP_new_CommunityList_NoNewCommunities_5, 
                style: style_VIP_new_CommunityList_NoNewCommunities_5,
                popuplayertitle: 'VIP_new_CommunityList_NoNewCommunities',
                interactive: true,
                title: '<img src="styles/legend/VIP_new_CommunityList_NoNewCommunities_5.png" /> VIP_new_CommunityList_NoNewCommunities'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_SystempinnedGPS_230325_3.setVisible(true);lyr_EnumPinnedGPS_230325_4.setVisible(true);lyr_VIP_new_CommunityList_NoNewCommunities_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_OSMStandard_2,lyr_SystempinnedGPS_230325_3,lyr_EnumPinnedGPS_230325_4,lyr_VIP_new_CommunityList_NoNewCommunities_5];
lyr_SystempinnedGPS_230325_3.set('fieldAliases', {'community': 'community', 's_gpsblatitude': 's_gpsblatitude', 's_gpsblongitude': 's_gpsblongitude', 's_gpsbaltitude': 's_gpsbaltitude', 's_gpsbaccuracy': 's_gpsbaccuracy', 'outcome': 'outcome', 'starttime': 'starttime', 'endtime': 'endtime', 'Start Time Rank': 'Start Time Rank', 'End Time Rank': 'End Time Rank', });
lyr_EnumPinnedGPS_230325_4.set('fieldAliases', {'community': 'community', 'e_gpslatitude': 'e_gpslatitude', 'e_gpslongitude': 'e_gpslongitude', 'e_gpsaltitude': 'e_gpsaltitude', 'e_gpsaccuracy': 'e_gpsaccuracy', 'outcome': 'outcome', 'starttime': 'starttime', 'endtime': 'endtime', 'Start Time Rank': 'Start Time Rank', 'End Time Rank': 'End Time Rank', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.set('fieldAliases', {'district': 'district', 'district_id': 'district_id', 'community': 'community', 'community_id': 'community_id', 'commcode': 'commcode', 'gpslatitude': 'gpslatitude', 'gpslongitude': 'gpslongitude', 'gpsaltitude': 'gpsaltitude', 'gpsaccuracy': 'gpsaccuracy', 'Census target': 'Census target', 'baseline_target': 'baseline_target', 'interval to skip': 'interval to skip', 'Cohort': 'Cohort', });
lyr_SystempinnedGPS_230325_3.set('fieldImages', {'community': 'TextEdit', 's_gpsblatitude': 'TextEdit', 's_gpsblongitude': 'TextEdit', 's_gpsbaltitude': 'TextEdit', 's_gpsbaccuracy': 'TextEdit', 'outcome': 'TextEdit', 'starttime': 'TextEdit', 'endtime': 'TextEdit', 'Start Time Rank': 'Range', 'End Time Rank': 'Range', });
lyr_EnumPinnedGPS_230325_4.set('fieldImages', {'community': 'TextEdit', 'e_gpslatitude': 'TextEdit', 'e_gpslongitude': 'TextEdit', 'e_gpsaltitude': 'TextEdit', 'e_gpsaccuracy': 'TextEdit', 'outcome': 'TextEdit', 'starttime': 'TextEdit', 'endtime': 'TextEdit', 'Start Time Rank': 'Range', 'End Time Rank': 'Range', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.set('fieldImages', {'district': 'TextEdit', 'district_id': 'Range', 'community': 'TextEdit', 'community_id': 'Range', 'commcode': 'Range', 'gpslatitude': 'TextEdit', 'gpslongitude': 'TextEdit', 'gpsaltitude': 'TextEdit', 'gpsaccuracy': 'TextEdit', 'Census target': 'Range', 'baseline_target': 'Range', 'interval to skip': 'Range', 'Cohort': 'Range', });
lyr_SystempinnedGPS_230325_3.set('fieldLabels', {'community': 'inline label - always visible', 's_gpsblatitude': 'hidden field', 's_gpsblongitude': 'hidden field', 's_gpsbaltitude': 'hidden field', 's_gpsbaccuracy': 'hidden field', 'outcome': 'inline label - always visible', 'starttime': 'hidden field', 'endtime': 'hidden field', 'Start Time Rank': 'inline label - always visible', 'End Time Rank': 'hidden field', });
lyr_EnumPinnedGPS_230325_4.set('fieldLabels', {'community': 'inline label - always visible', 'e_gpslatitude': 'hidden field', 'e_gpslongitude': 'hidden field', 'e_gpsaltitude': 'hidden field', 'e_gpsaccuracy': 'hidden field', 'outcome': 'inline label - always visible', 'starttime': 'hidden field', 'endtime': 'hidden field', 'Start Time Rank': 'inline label - always visible', 'End Time Rank': 'hidden field', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.set('fieldLabels', {'district': 'inline label - always visible', 'district_id': 'hidden field', 'community': 'hidden field', 'community_id': 'hidden field', 'commcode': 'hidden field', 'gpslatitude': 'hidden field', 'gpslongitude': 'hidden field', 'gpsaltitude': 'hidden field', 'gpsaccuracy': 'hidden field', 'Census target': 'inline label - always visible', 'baseline_target': 'inline label - always visible', 'interval to skip': 'inline label - always visible', 'Cohort': 'inline label - always visible', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});