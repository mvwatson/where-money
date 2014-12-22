// FCF Main - A set of javascript to support the FCF webform

function listAllProperties(o){     
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}

function General() {
	this.itemList = [];
	this.projectList = [];
}

var gen = new General();
gen.fromDate = "2014-12-01";
gen.toDate = "2015-06-01";
gen.granularity = "Weekly";
gen.startCash = 352.00;
console.log(listAllProperties(gen));
console.log(gen.granularity);

var jsonString = JSON.stringify(gen);
console.log(jsonString);


var jsonObj = JSON.parse('{"itemList":[],"projectList":[],"fromDate":"2014-12-01","toDate":"2015-06-01","granularity":"Weekly","startCash":352}');
console.log(listAllProperties(jsonObj));
