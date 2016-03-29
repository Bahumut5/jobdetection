var data = {};
var options = {
			resolution: 'provinces',
			region: 'NL',
			width: '100%', //100% as it takes the size from the div
			height: '100%',
		};
var container = document.getElementById('map');
var geochart = new google.visualization.GeoChart(container);
var mapData = document.getElementById("divMap");
var currentProvinceData = {};
var currentSelectedProvince = {};

function loadData()
	{
		data = new google.visualization.DataTable();
			data.addRows(12); //we defined the rows here as we do not have a database yet to load the data via AJAX (Count)
			data.addColumn('string', 'Provinces'); //defined that the map should show provinces rather than countries
			data.addColumn('number', 'Job-Count'); //the information which it has to show on mouse-over
			data.setValue(0, 0, 'Noord-Brabant'); //all the provinces are added manually by us
			data.setValue(0, 1, 1500); //number, row and the data in that row
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
	}
	
function loadProvinceData(province)
{
	currentProvinceData = {};
	currentProvinceData.Title = province;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			console.log(xhttp.responseText);
			currentProvinceData.Data = JSON.parse(xhttp.responseText);//eval(xhttp.responseText);
			drawProvinceData();
		}
	};
	xhttp.open("GET", "pages/Regions/" + province + "/provinceData.json", true);
	xhttp.send();
}	
function drawProvinceData(province)
{
	
	var data = new google.visualization.arrayToDataTable(currentProvinceData.Data);

        var options = {
			title: currentProvinceData.Title,
			width: '100%',
			heigth: '100%',
			legend: { position: 'none' },
			colors: ['#D86450'],
			chart: { title: currentProvinceData.Title,
					subtitle: 'Jobs' },
			bars: 'horizontal', // Required for Material Bar Charts.
			axes: {
			x: {
				0: { side: 'top', label: 'Amount'} // Top x-axis.
			}
			},
			bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('divMap'));
        chart.draw(data, options);
}

function initializeMap()
{
	geochart.draw(data, options);
	google.visualization.events.addListener(geochart, 'select', function () {
		// GeoChart selections return an array of objects with a row property; no column information
		var selection = geochart.getSelection();
		//Leave the next part for testing purpose!
		//alert(data.getValue(selection[0].row, 0));
		//window.open("Regions/" + data.getValue(selection[0].row, 0) + "/province.html", "#divMap");
		loadProvinceData(data.getValue(selection[0].row, 0));
		
	});		
}

loadData();
initializeMap();