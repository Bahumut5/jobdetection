var accountancy = {
	title: "Accountancy",
};
var advertisingPRCommunications = {
	title: "advertisingPRCommunications",
};
var advice_Consultancy = {
	title: "adviceConsultancy",
};
var agriculture_Forestry_Fishing = {
	title: "agricultureForestryFishing",
};
var artsCulture_Entertainment = {
	title: "artsCultureEntertainment",
};
var automotive = {
	title: "automotive",
};
var banksFinancialServices = {
	title: "banksFinancialServices",
};
var businessServices = {
	title: "businessServices",
};
var chemicalPetrochemical = {
	title: "contactUs",
};
var constructionInstallation = {
	title: "constructionInstallation",
};
var educationTraining = {
	title: "educationTraining",
};
var electronics = {
	title: "electronics",
};
var energyGasWater = {
	title: "energyGasWater",
};
var facilityManagement = {
	title: "facilityManagement",
};
var fashionTextilesCosmetics = {
	title: "fashionTextilesCosmetics",
};
var FMCG = {
	title: "FMCG",
};
var governmentNonprofit = {
	title: "governmentNonprofit",
};
var healthWellness = {
	title: "healthWellness",
};
var horeca = {
	title: "horeca",
};
var ICT = {
	title: "ICT",
};
var industry = {
	title: "industry",
};
var insurance = {
	title: "insurance",
};
var internet = {
	title: "internet",
};
var legalServices = {
	title: "legalServices",
};
var maritime = {
	title: "maritime",
};
var mediaPublishingTV = {
	title: "mediaPublishingTV",
};
var peopleTransport = {
	title: "peopleTransport",
};
var pharmacy = {
	title: "pharmacy",
};
var programmingSecondmentSS = {
	title: "programmingSecondmentS&S",
};
var realEstateProperty = {
	title: "realEstateProperty",
};
var remaining = {
	title: "remaining",
};
var retail = {
	title: "retail",
};
var retailWholesale = {
	title: "retailWholesale",
};
var securitySurveillance = {
	title: "securitySurveillance",
};
var sportsRecreationTourism = {
	title: "sportsRecreationTourism",
};	
var technical = {
	title: "technical",
};
var telecom = {
	title: "telecom",
};
var transportationWarehousingDistribution = {
	title: "transportationWarehousingDistribution",
};	
var wasteAndEnvironment = {
	title: "wasteAndEnvironment",
};	
		
function loadCategory(category) {

	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		  document.getElementById("contentCategory").innerHTML = xhttp.responseText;
		}
	  };
	  xhttp.open("GET", "pages/Categories/" + category + ".html", true);
	  xhttp.send();	  
}

console.log("Registering LoadCat");
function loadCat(category)
{
	var obj = undefined;
	switch(category)
	{
		case "Accountancy":
		obj = accountancy;
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
	loadCategory(obj.title);
}
console.log("LoadCat Registered");

pageScope = {
	loadCat: loadCat
};
