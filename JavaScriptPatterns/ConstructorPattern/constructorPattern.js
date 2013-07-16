//constructor pattern example
//remember in javascript everything is an object
function Vehicle(name, config) {
	this.name = name;
	this.config = config;
	this.toString = function() {
		return this.name;
	};
}

var Car = new Vehicle('BMW', {
	
	"id": {
		value: "1",
		enumerable: true
	},
	"model": {
		value: "320i",
		enumerable: true
	},
});

//extending functionality
Car.getModel = function() {
	var model = Car.config.model.value;
	console.log("this vehicle model is " + model);
};
//Usage
console.log(Car.toString());
console.log(Car.getModel());

