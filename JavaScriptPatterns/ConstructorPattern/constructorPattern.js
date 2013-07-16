//constructor pattern example
//remember in javascript everything is an object
function Vehicle(name) {
	this.name = name;
	
	this.toString = function() {
		return this.name;
	};
	
}

var Car = new Vehicle('BMW');
console.log(Car.toString());

//Usage


