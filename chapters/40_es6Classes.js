'use strict';

function es6Classes () {
	
	//new version
	
	class Person6 {
		constructor(name, lastName) {
			this.name = name;
			this.lastName = lastName;		
		}
		
		greet() {
			console.log(`hello I am ${this.name}, ${this.lastName}`);
		}
	}
	
	var jean = new Person6('Jean', 'Troiani');
	
	console.log(jean.greet());
	
	//old way
	function Person (name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}
	
	Person.prototype.greet = function () {
		console.log(`hello I am ${this.name}, ${this.lastName}`);
	}
	
}

module.exports = es6Classes;