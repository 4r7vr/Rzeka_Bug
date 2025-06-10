var wms_layers = [];

var format_hist_vmap_0 = new ol.format.GeoJSON();
var features_hist_vmap_0 = format_hist_vmap_0.readFeatures(json_hist_vmap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hist_vmap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hist_vmap_0.addFeatures(features_hist_vmap_0);
var lyr_hist_vmap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hist_vmap_0, 
                style: style_hist_vmap_0,
                popuplayertitle: 'hist_vmap',
                interactive: true,
    title: 'hist_vmap<br />\
    <img src="styles/legend/hist_vmap_0_0.png" /> -100 - -80<br />\
    <img src="styles/legend/hist_vmap_0_1.png" /> -80 - -60<br />\
    <img src="styles/legend/hist_vmap_0_2.png" /> -60 - -40<br />\
    <img src="styles/legend/hist_vmap_0_3.png" /> -40 - -20<br />\
    <img src="styles/legend/hist_vmap_0_4.png" /> -20 - 0<br />\
    <img src="styles/legend/hist_vmap_0_5.png" /> 0 - 20<br />\
    <img src="styles/legend/hist_vmap_0_6.png" /> 20 - 40<br />\
    <img src="styles/legend/hist_vmap_0_7.png" /> 40 - 60<br />\
    <img src="styles/legend/hist_vmap_0_8.png" /> 60 - 80<br />\
    <img src="styles/legend/hist_vmap_0_9.png" /> 80 - 98<br />' });
var format_vmap_lands_1 = new ol.format.GeoJSON();
var features_vmap_lands_1 = format_vmap_lands_1.readFeatures(json_vmap_lands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_lands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_lands_1.addFeatures(features_vmap_lands_1);
var lyr_vmap_lands_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_lands_1, 
                style: style_vmap_lands_1,
                popuplayertitle: 'vmap_lands',
                interactive: true,
    title: 'vmap_lands<br />\
    <img src="styles/legend/vmap_lands_1_0.png" /> -42,2 - -40<br />\
    <img src="styles/legend/vmap_lands_1_1.png" /> -40 - -20<br />\
    <img src="styles/legend/vmap_lands_1_2.png" /> -20 - 0<br />\
    <img src="styles/legend/vmap_lands_1_3.png" /> 0 - 20<br />\
    <img src="styles/legend/vmap_lands_1_4.png" /> 20 - 40<br />\
    <img src="styles/legend/vmap_lands_1_5.png" /> 40 - 60<br />\
    <img src="styles/legend/vmap_lands_1_6.png" /> 60 - 69,7<br />' });
var format_hist1940_2 = new ol.format.GeoJSON();
var features_hist1940_2 = format_hist1940_2.readFeatures(json_hist1940_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hist1940_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hist1940_2.addFeatures(features_hist1940_2);
var lyr_hist1940_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hist1940_2, 
                style: style_hist1940_2,
                popuplayertitle: 'hist1940',
                interactive: true,
                title: '<img src="styles/legend/hist1940_2.png" /> hist1940'
            });
var format_kiedykolwiek_3 = new ol.format.GeoJSON();
var features_kiedykolwiek_3 = format_kiedykolwiek_3.readFeatures(json_kiedykolwiek_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiedykolwiek_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiedykolwiek_3.addFeatures(features_kiedykolwiek_3);
var lyr_kiedykolwiek_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kiedykolwiek_3, 
                style: style_kiedykolwiek_3,
                popuplayertitle: 'kiedykolwiek',
                interactive: true,
                title: '<img src="styles/legend/kiedykolwiek_3.png" /> kiedykolwiek'
            });
var format_Sentinel2025_4 = new ol.format.GeoJSON();
var features_Sentinel2025_4 = format_Sentinel2025_4.readFeatures(json_Sentinel2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2025_4.addFeatures(features_Sentinel2025_4);
var lyr_Sentinel2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2025_4, 
                style: style_Sentinel2025_4,
                popuplayertitle: 'Sentinel2025',
                interactive: true,
                title: '<img src="styles/legend/Sentinel2025_4.png" /> Sentinel2025'
            });
var format_VMAP2002_5 = new ol.format.GeoJSON();
var features_VMAP2002_5 = format_VMAP2002_5.readFeatures(json_VMAP2002_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP2002_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP2002_5.addFeatures(features_VMAP2002_5);
var lyr_VMAP2002_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP2002_5, 
                style: style_VMAP2002_5,
                popuplayertitle: 'VMAP2002',
                interactive: true,
                title: '<img src="styles/legend/VMAP2002_5.png" /> VMAP2002'
            });
var format_zawsze_6 = new ol.format.GeoJSON();
var features_zawsze_6 = format_zawsze_6.readFeatures(json_zawsze_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zawsze_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zawsze_6.addFeatures(features_zawsze_6);
var lyr_zawsze_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zawsze_6, 
                style: style_zawsze_6,
                popuplayertitle: 'zawsze',
                interactive: true,
                title: '<img src="styles/legend/zawsze_6.png" /> zawsze'
            });

lyr_hist_vmap_0.setVisible(true);lyr_vmap_lands_1.setVisible(true);lyr_hist1940_2.setVisible(true);lyr_kiedykolwiek_3.setVisible(true);lyr_Sentinel2025_4.setVisible(true);lyr_VMAP2002_5.setVisible(true);lyr_zawsze_6.setVisible(true);
var layersList = [lyr_hist_vmap_0,lyr_vmap_lands_1,lyr_hist1940_2,lyr_kiedykolwiek_3,lyr_Sentinel2025_4,lyr_VMAP2002_5,lyr_zawsze_6];
lyr_hist_vmap_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'ProcLand': 'ProcLand', 'ProcVMAP': 'ProcVMAP', 'ProcHist': 'ProcHist', 'hist_vmap': 'hist_vmap', 'vmap_land': 'vmap_land', });
lyr_vmap_lands_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'ProcLand': 'ProcLand', 'ProcVMAP': 'ProcVMAP', 'ProcHist': 'ProcHist', 'hist_vmap': 'hist_vmap', 'vmap_land': 'vmap_land', });
lyr_hist1940_2.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_kiedykolwiek_3.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sentinel2025_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VMAP2002_5.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_zawsze_6.set('fieldAliases', {'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_mapa_a': 'FID_mapa_a', 'Id_1': 'Id_1', 'FID_Raster': 'FID_Raster', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_hist_vmap_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'ProcLand': 'TextEdit', 'ProcVMAP': 'TextEdit', 'ProcHist': 'TextEdit', 'hist_vmap': 'TextEdit', 'vmap_land': 'TextEdit', });
lyr_vmap_lands_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'ProcLand': 'TextEdit', 'ProcVMAP': 'TextEdit', 'ProcHist': 'TextEdit', 'hist_vmap': 'TextEdit', 'vmap_land': 'TextEdit', });
lyr_hist1940_2.set('fieldImages', {'Id': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_kiedykolwiek_3.set('fieldImages', {'DLUG_BRZEG': '', 'DLUGOSC': '', 'DOKLADNOSC': '', 'DOSTEPNOSC': '', 'GLEBOKOSC': '', 'ISTNIENIE': '', 'KAT_HYDRO': '', 'KAT_PLYWU': '', 'KAT_POJEMN': '', 'KAT_POLOZ': '', 'KAT_WODY': '', 'NAJW_WYS': '', 'NAZWA': '', 'OBIEKT': '', 'OPR_UPUST': '', 'OPR_ZBURZ': '', 'POCH_HYDRO': '', 'PRED_PRZEP': '', 'SREDNIA_GL': '', 'STAT_EKSPL': '', 'SZEROKOSC': '', 'TAJNOSC': '', 'TYP_AKWED': '', 'TYP_WYBRZ': '', 'ZN_ORIENT': '', 'POWIERZCHN': '', 'ID': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Sentinel2025_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMAP2002_5.set('fieldImages', {'DLUG_BRZEG': '', 'DLUGOSC': '', 'DOKLADNOSC': '', 'DOSTEPNOSC': '', 'GLEBOKOSC': '', 'ISTNIENIE': '', 'KAT_HYDRO': '', 'KAT_PLYWU': '', 'KAT_POJEMN': '', 'KAT_POLOZ': '', 'KAT_WODY': '', 'NAJW_WYS': '', 'NAZWA': '', 'OBIEKT': '', 'OPR_UPUST': '', 'OPR_ZBURZ': '', 'POCH_HYDRO': '', 'PRED_PRZEP': '', 'SREDNIA_GL': '', 'STAT_EKSPL': '', 'SZEROKOSC': '', 'TAJNOSC': '', 'TYP_AKWED': '', 'TYP_WYBRZ': '', 'ZN_ORIENT': '', 'POWIERZCHN': '', 'ID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_zawsze_6.set('fieldImages', {'FID_HYDRO_': '', 'DLUG_BRZEG': '', 'DLUGOSC': '', 'DOKLADNOSC': '', 'DOSTEPNOSC': '', 'GLEBOKOSC': '', 'ISTNIENIE': '', 'KAT_HYDRO': '', 'KAT_PLYWU': '', 'KAT_POJEMN': '', 'KAT_POLOZ': '', 'KAT_WODY': '', 'NAJW_WYS': '', 'NAZWA': '', 'OBIEKT': '', 'OPR_UPUST': '', 'OPR_ZBURZ': '', 'POCH_HYDRO': '', 'PRED_PRZEP': '', 'SREDNIA_GL': '', 'STAT_EKSPL': '', 'SZEROKOSC': '', 'TAJNOSC': '', 'TYP_AKWED': '', 'TYP_WYBRZ': '', 'ZN_ORIENT': '', 'POWIERZCHN': '', 'ID': '', 'FID_mapa_a': '', 'Id_1': '', 'FID_Raster': '', 'Id_12': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_hist_vmap_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'ProcLand': 'no label', 'ProcVMAP': 'no label', 'ProcHist': 'no label', 'hist_vmap': 'no label', 'vmap_land': 'no label', });
lyr_vmap_lands_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'ProcLand': 'no label', 'ProcVMAP': 'no label', 'ProcHist': 'no label', 'hist_vmap': 'no label', 'vmap_land': 'no label', });
lyr_hist1940_2.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_kiedykolwiek_3.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sentinel2025_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_VMAP2002_5.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_zawsze_6.set('fieldLabels', {'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'FID_mapa_a': 'no label', 'Id_1': 'no label', 'FID_Raster': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_zawsze_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});