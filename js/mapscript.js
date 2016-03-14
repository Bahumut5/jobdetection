google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = new google.visualization.DataTable();
 		  data.addRows(12);
		  data.addColumn('string', 'Provinces');
		  data.addColumn('number', 'Job-Count');
		  data.setValue(0, 0, 'Noord-Brabant');
		  data.setValue(0, 1, 1500);
		  data.setValue(1, 0, 'Noord-Holland');
		  data.setValue(1, 1, 600);
		  data.setValue(2, 0, 'Zuid-Holland');
		  data.setValue(2, 1, 700);
		  data.setValue(3, 0, 'Friesland');
		  data.setValue(3, 1, 60);
		  data.setValue(4, 0, 'Zeeland');
		  data.setValue(4, 1, 0);
		  data.setValue(5, 0, 'Utrecht');
		  data.setValue(5, 1, 250);
		  data.setValue(6, 0, 'Groningen');
		  data.setValue(6, 1, 370);
		  data.setValue(7, 0, 'Flevoland');
		  data.setValue(7, 1, 900);
		  data.setValue(8, 0, 'Overijssel');
		  data.setValue(8, 1, 800);
		  data.setValue(9, 0, 'Limburg');
		  data.setValue(9, 1, 123);
		  data.setValue(10, 0, 'Gelderland');
		  data.setValue(10, 1, 752);
		  data.setValue(11, 0, 'Drenthe');
		  data.setValue(11, 1, 549);

		  var options = {
			resolution: 'provinces',
			region: 'NL',
			width: '100%',
			height: '100%',
		  };
    var container = document.getElementById('map');
    var geochart = new google.visualization.GeoChart(container);
    
    // register the 'select' event handler
		google.visualization.events.addListener(geochart, 'select', function () {
        // GeoChart selections return an array of objects with a row property; no column information
        var selection = geochart.getSelection();
		//Leave the next part for testing purpose!
        //alert(data.getValue(selection[0].row, 0));
		//window.open("Regions/" + data.getValue(selection[0].row, 0) + "/province.html", "#divMap");
		$("#divMap").load("Regions/" + data.getValue(selection[0].row, 0) + "/province.html"), function() {
			alert('Load was performed');
		};
    });
    
    geochart.draw(data, options);
};
	</script>  