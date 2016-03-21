google.load('visualization', '1', {'packages': ['geochart','bar']});
var mainPage = {
	title: "mainPage",
	hasJS: true
};
var byRegion = {
	title: "byRegion",
	hasJS: true
};
var byCategory = {
	title: "byCategory",
	hasJS: true
};
var about = {
	title: "about",
	hasJS: true
};
var contactUs = {
	title: "contactUs",
	hasJS: true
};
var accountancy = {
	title: "Accountancy"
};
	
var pageScope = {};
	
	
function loadDoc(page) {

	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		  document.getElementById("content").innerHTML = xhttp.responseText;
		}
	  };
	  
	  var rnd = Math.random().toString();
	  var rnd = rnd.substring(rnd.indexOf(".") + 1);
	  xhttp.open("GET", "pages/" + page + ".html?rnd=" + rnd, true);
	  xhttp.send();	  
}

function loadJS(page) {
	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		  //Evil
		  eval(xhttp.responseText);
		}
	  };
	  
	  var rnd = Math.random().toString();
	  var rnd = rnd.substring(rnd.indexOf(".") + 1);
	  xhttp.open("GET", "pages/scripts/" + page + ".js?rnd=" + rnd, true);
	  xhttp.send();	 
}

function loadPage(page)
{
	var obj = undefined;
	switch(page)
	{
		case "mainPage":
		obj = mainPage;
		break;
		case "byRegion":
		obj = byRegion;
		break;
		case "byCategory":
		obj = byCategory;
		break;
		case "contactUs":
		obj = contactUs;
		break;
		case "about":
		obj = about;
		break;
	}
	
	loadDoc(obj.title);
	
	pageScope = {};
	if(obj.hasJS)
		loadJS(obj.title);
}