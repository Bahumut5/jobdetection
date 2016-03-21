var accountancy = {
	title: "accountancy",
};
var advertisingPRCommunications = {
	title: "advertisingPRCommunications",
};
var adviceConsultancy = {
	title: "adviceConsultancy",
};
var agricultureForestryFishing = {
	title: "agricultureForestryFishing",
};
var artsCultureEntertainment = {
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
	title: "chemicalPetrochemical",
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
		case "accountancy":
		obj = accountancy;
		break;
		case "advertisingPRCommunications":
		obj = advertisingPRCommunications;
		break;
		case "adviceConsultancy":
		obj = adviceConsultancy;
		break;
		case "agricultureForestryFishing":
		obj = agricultureForestryFishing;
		break;
		case "artsCultureEntertainment":
		obj = artsCultureEntertainment;
		break;
		case "automotive":
		obj = automotive;
		break;
		case "banksFinancialServices":
		obj = banksFinancialServices;
		break;
		case "businessServices":
		obj = businessServices;
		break;
		case "chemicalPetrochemical":
		obj = chemicalPetrochemical;
		break;
		case "constructionInstallation":
		obj = constructionInstallation;
		break;
		case "educationTraining":
		obj = educationTraining;
		break;
		case "electronics":
		obj = electronics;
		break;
		case "energyGasWater":
		obj = energyGasWater;
		break;
		case "facilityManagement":
		obj = facilityManagement;
		break;
		case "fashionTextilesCosmetics":
		obj = fashionTextilesCosmetics;
		break;
		case "FMCG":
		obj = FMCG;
		break;
		case "governmentNonprofit":
		obj = governmentNonprofit;
		break;
		case "healthWellness":
		obj = healthWellness;
		break;
		case "horeca":
		obj = horeca;
		break;
		case "ICT":
		obj = ICT;
		break;
		case "industry":
		obj = industry;
		break;
		case "insurance":
		obj = insurance;
		break;
		case "internet":
		obj = internet;
		break;
		case "legalServices":
		obj = legalServices;
		break;
		case "maritime":
		obj = maritime;
		break;
		case "mediaPublishingTV":
		obj = mediaPublishingTV;
		break;
		case "peopleTransport":
		obj = peopleTransport;
		break;
		case "pharmacy":
		obj = pharmacy;
		break;
		case "programmingSecondmentS&S":
		obj = programmingSecondmentSS;
		break;
		case "realEstateProperty":
		obj = realEstateProperty;
		break;
		case "remaining":
		obj = remaining;
		break;
		case "retail":
		obj = retail;
		break;
		case "retailWholesale":
		obj = retailWholesale;
		break;
		case "securitySurveillance":
		obj = securitySurveillance;
		break;
		case "sportsRecreationTourism":
		obj = sportsRecreationTourism;
		break;
		case "technical":
		obj = technical;
		break;
		case "telecom":
		obj = telecom;
		break;
		case "transportationWarehousingDistribution":
		obj = transportationWarehousingDistribution;
		break;
		case "wasteAndEnvironment":
		obj = wasteAndEnvironment;
		break;
	}
	loadCategory(obj.title);
}
console.log("LoadCat Registered");

pageScope = {
	loadCat: loadCat
};
