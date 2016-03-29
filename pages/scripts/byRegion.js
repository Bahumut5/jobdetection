var drenthe = {
	title: "Drenthe",
};
var flevoland = {
	title: "Flevoland",
};
var friesland = {
	title: "Friesland",
};
var gelderland = {
	title: "Gelderland",
};
var groningen = {
	title: "Groningen",
};
var limburg = {
	title: "Limburg",
};
var noordbrabant = {
	title: "Noord-Brabant",
};
var noordholland = {
	title: "Noord-Holland",
};
var overijssel = {
	title: "Overijssel",
};
var utrecht = {
	title: "Utrecht",
};
var zeeland = {
	title: "Zeeland",
};
var zuidholland = {
	title: "Zuid-Holland",
};

var mapData = document.getElementById("contentRegion");
var currentProvinceData = {};

		
/*function loadRegion(region) {

	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		  document.getElementById("contentRegion").innerHTML = xhttp.responseText;
		}
	  };
	  xhttp.open("GET", "pages/Regions/" + region + "/province.html", true);
	  xhttp.send();	  
}*/

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

        var chart = new google.charts.Bar(document.getElementById('contentRegion'));
        chart.draw(data, options);
}

console.log("Registering loadReg");
function loadReg(province)
{
	var obj = undefined;
	switch(province)
	{
		case "drenthe": 
		obj = drenthe; 
		break;
		case "flevoland": 
		obj = flevoland; 
		break;
		case "friesland": 
		obj = friesland; 
		break;
		case "gelderland": 
		obj = gelderland; 
		break;
		case "groningen": 
		obj = groningen; 
		break;
		case "limburg": 
		obj = limburg; 
		break;
		case "noordbrabant": 
		obj = noordbrabant; 
		break;
		case "noordholland": 
		obj = noordholland; 
		break;
		case "overijssel": 
		obj = overijssel; 
		break;
		case "utrecht": 
		obj = utrecht; 
		break;
		case "zeeland": 
		obj = zeeland; 
		break;
		case "zuidholland": 
		obj = zuidholland; 
		break;
	}
	loadProvinceData(obj.title);
}
console.log("LoadReg Registered");

pageScope = {
	loadReg: loadReg
};
