var wms_layers = [];

var lyr_ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ORTOMOSAICO_MARCONI_060223_UTM21S_modificado<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6251724.264018, -4142157.517936, -6251059.926807, -4141434.552546]
        })
    });
var format_Cursosdeagua_1 = new ol.format.GeoJSON();
var features_Cursosdeagua_1 = format_Cursosdeagua_1.readFeatures(json_Cursosdeagua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cursosdeagua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cursosdeagua_1.addFeatures(features_Cursosdeagua_1);
var lyr_Cursosdeagua_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cursosdeagua_1, 
                style: style_Cursosdeagua_1,
                popuplayertitle: 'Cursos de agua',
                interactive: false,
                title: '<img src="styles/legend/Cursosdeagua_1.png" /> Cursos de agua'
            });
var format_EspacioPblico_2 = new ol.format.GeoJSON();
var features_EspacioPblico_2 = format_EspacioPblico_2.readFeatures(json_EspacioPblico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspacioPblico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspacioPblico_2.addFeatures(features_EspacioPblico_2);
var lyr_EspacioPblico_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspacioPblico_2, 
                style: style_EspacioPblico_2,
                popuplayertitle: 'Espacio Público',
                interactive: false,
                title: '<img src="styles/legend/EspacioPblico_2.png" /> Espacio Público'
            });
var format_PropuestacallesPot_3 = new ol.format.GeoJSON();
var features_PropuestacallesPot_3 = format_PropuestacallesPot_3.readFeatures(json_PropuestacallesPot_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PropuestacallesPot_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropuestacallesPot_3.addFeatures(features_PropuestacallesPot_3);
var lyr_PropuestacallesPot_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PropuestacallesPot_3, 
                style: style_PropuestacallesPot_3,
                popuplayertitle: 'Propuesta calles Pot',
                interactive: false,
                title: '<img src="styles/legend/PropuestacallesPot_3.png" /> Propuesta calles Pot'
            });
var format_Padrones_4 = new ol.format.GeoJSON();
var features_Padrones_4 = format_Padrones_4.readFeatures(json_Padrones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padrones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padrones_4.addFeatures(features_Padrones_4);
var lyr_Padrones_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padrones_4, 
                style: style_Padrones_4,
                popuplayertitle: 'Padrones ',
                interactive: false,
                title: '<img src="styles/legend/Padrones_4.png" /> Padrones '
            });
var format_Nuevascallesqueseabren_5 = new ol.format.GeoJSON();
var features_Nuevascallesqueseabren_5 = format_Nuevascallesqueseabren_5.readFeatures(json_Nuevascallesqueseabren_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nuevascallesqueseabren_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nuevascallesqueseabren_5.addFeatures(features_Nuevascallesqueseabren_5);
var lyr_Nuevascallesqueseabren_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nuevascallesqueseabren_5, 
                style: style_Nuevascallesqueseabren_5,
                popuplayertitle: 'Nuevas calles que se abren',
                interactive: false,
                title: '<img src="styles/legend/Nuevascallesqueseabren_5.png" /> Nuevas calles que se abren'
            });
var format_Cateoscromorojo_6 = new ol.format.GeoJSON();
var features_Cateoscromorojo_6 = format_Cateoscromorojo_6.readFeatures(json_Cateoscromorojo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cateoscromorojo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cateoscromorojo_6.addFeatures(features_Cateoscromorojo_6);
var lyr_Cateoscromorojo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cateoscromorojo_6, 
                style: style_Cateoscromorojo_6,
                popuplayertitle: 'Cateos cromo rojo',
                interactive: true,
                title: '<img src="styles/legend/Cateoscromorojo_6.png" /> Cateos cromo rojo'
            });
var format_Cateocromoverde_7 = new ol.format.GeoJSON();
var features_Cateocromoverde_7 = format_Cateocromoverde_7.readFeatures(json_Cateocromoverde_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cateocromoverde_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cateocromoverde_7.addFeatures(features_Cateocromoverde_7);
var lyr_Cateocromoverde_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cateocromoverde_7, 
                style: style_Cateocromoverde_7,
                popuplayertitle: 'Cateo cromo verde',
                interactive: true,
                title: '<img src="styles/legend/Cateocromoverde_7.png" /> Cateo cromo verde'
            });

lyr_ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0.setVisible(true);lyr_Cursosdeagua_1.setVisible(true);lyr_EspacioPblico_2.setVisible(true);lyr_PropuestacallesPot_3.setVisible(true);lyr_Padrones_4.setVisible(true);lyr_Nuevascallesqueseabren_5.setVisible(true);lyr_Cateoscromorojo_6.setVisible(true);lyr_Cateocromoverde_7.setVisible(true);
var layersList = [lyr_ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0,lyr_Cursosdeagua_1,lyr_EspacioPblico_2,lyr_PropuestacallesPot_3,lyr_Padrones_4,lyr_Nuevascallesqueseabren_5,lyr_Cateoscromorojo_6,lyr_Cateocromoverde_7];
lyr_Cursosdeagua_1.set('fieldAliases', {'GID': 'GID', 'NATURALEZA': 'NATURALEZA', 'NOMBRE_CUR': 'NOMBRE_CUR', });
lyr_EspacioPblico_2.set('fieldAliases', {'GID': 'GID', 'COD_NOM_ES': 'COD_NOM_ES', 'NOMBRE_ESP': 'NOMBRE_ESP', 'NRO_ESPACI': 'NRO_ESPACI', 'COD_NOM_PA': 'COD_NOM_PA', 'NOM_PARQUE': 'NOM_PARQUE', 'TIPO_ESPAC': 'TIPO_ESPAC', 'TIPO_ES_01': 'TIPO_ES_01', 'DESC_TIPO_': 'DESC_TIPO_', 'DECRETO': 'DECRETO', 'FECHA_DECR': 'FECHA_DECR', 'RESOLUCION': 'RESOLUCION', 'FECHA_RESO': 'FECHA_RESO', 'UBICACION': 'UBICACION', 'SIGNIFICAD': 'SIGNIFICAD', 'TCNV_CATEG': 'TCNV_CATEG', 'TSCNV_CATE': 'TSCNV_CATE', });
lyr_PropuestacallesPot_3.set('fieldAliases', {'id': 'id', });
lyr_Padrones_4.set('fieldAliases', {'GID': 'GID', 'PADRON': 'PADRON', 'AREATOT': 'AREATOT', 'AREACAT': 'AREACAT', 'PH': 'PH', 'IMPONIBLE': 'IMPONIBLE', 'CARPETA_PH': 'CARPETA_PH', });
lyr_Nuevascallesqueseabren_5.set('fieldAliases', {'id': 'id', });
lyr_Cateoscromorojo_6.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'Resultados de cateos a 2cm de profundidad': 'Resultados de cateos a 2cm de profundidad', });
lyr_Cateocromoverde_7.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'Resultados de cateos a 2cm de profundidaD': 'Resultados de cateos a 2cm de profundidaD', });
lyr_Cursosdeagua_1.set('fieldImages', {'GID': 'TextEdit', 'NATURALEZA': 'TextEdit', 'NOMBRE_CUR': 'TextEdit', });
lyr_EspacioPblico_2.set('fieldImages', {'GID': 'TextEdit', 'COD_NOM_ES': 'TextEdit', 'NOMBRE_ESP': 'TextEdit', 'NRO_ESPACI': 'TextEdit', 'COD_NOM_PA': 'TextEdit', 'NOM_PARQUE': 'TextEdit', 'TIPO_ESPAC': 'TextEdit', 'TIPO_ES_01': 'TextEdit', 'DESC_TIPO_': 'TextEdit', 'DECRETO': 'TextEdit', 'FECHA_DECR': 'TextEdit', 'RESOLUCION': 'TextEdit', 'FECHA_RESO': 'TextEdit', 'UBICACION': 'TextEdit', 'SIGNIFICAD': 'TextEdit', 'TCNV_CATEG': 'TextEdit', 'TSCNV_CATE': 'TextEdit', });
lyr_PropuestacallesPot_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Padrones_4.set('fieldImages', {'GID': 'TextEdit', 'PADRON': 'TextEdit', 'AREATOT': 'TextEdit', 'AREACAT': 'TextEdit', 'PH': 'TextEdit', 'IMPONIBLE': 'TextEdit', 'CARPETA_PH': 'TextEdit', });
lyr_Nuevascallesqueseabren_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Cateoscromorojo_6.set('fieldImages', {'fid': '', 'field_1': '', 'field_2': '', 'field_3': '', 'Resultados de cateos a 2cm de profundidad': '', });
lyr_Cateocromoverde_7.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'Range', 'field_3': 'Range', 'Resultados de cateos a 2cm de profundidaD': '', });
lyr_Cursosdeagua_1.set('fieldLabels', {'GID': 'header label - visible with data', 'NATURALEZA': 'hidden field', 'NOMBRE_CUR': 'hidden field', });
lyr_EspacioPblico_2.set('fieldLabels', {'GID': 'header label - visible with data', 'COD_NOM_ES': 'inline label - visible with data', 'NOMBRE_ESP': 'hidden field', 'NRO_ESPACI': 'inline label - visible with data', 'COD_NOM_PA': 'inline label - visible with data', 'NOM_PARQUE': 'inline label - always visible', 'TIPO_ESPAC': 'inline label - visible with data', 'TIPO_ES_01': 'inline label - visible with data', 'DESC_TIPO_': 'inline label - visible with data', 'DECRETO': 'inline label - always visible', 'FECHA_DECR': 'inline label - visible with data', 'RESOLUCION': 'inline label - visible with data', 'FECHA_RESO': 'inline label - visible with data', 'UBICACION': 'inline label - always visible', 'SIGNIFICAD': 'inline label - always visible', 'TCNV_CATEG': 'inline label - always visible', 'TSCNV_CATE': 'inline label - always visible', });
lyr_PropuestacallesPot_3.set('fieldLabels', {'id': 'no label', });
lyr_Padrones_4.set('fieldLabels', {'GID': 'header label - always visible', 'PADRON': 'inline label - always visible', 'AREATOT': 'header label - visible with data', 'AREACAT': 'header label - visible with data', 'PH': 'inline label - always visible', 'IMPONIBLE': 'inline label - always visible', 'CARPETA_PH': 'inline label - always visible', });
lyr_Nuevascallesqueseabren_5.set('fieldLabels', {'id': 'no label', });
lyr_Cateoscromorojo_6.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'field_2': 'hidden field', 'field_3': 'hidden field', 'Resultados de cateos a 2cm de profundidad': 'inline label - visible with data', });
lyr_Cateocromoverde_7.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'field_2': 'hidden field', 'field_3': 'hidden field', 'Resultados de cateos a 2cm de profundidaD': 'inline label - visible with data', });
lyr_Cateocromoverde_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});