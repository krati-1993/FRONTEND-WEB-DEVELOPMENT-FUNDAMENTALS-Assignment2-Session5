var objName = {

		name: 'Name',
		age: 'Age',
		dateofbirth: 'Date of Birth',
		placeofbirth: 'Place of Birth',
		fun: function(){
			return this.name + ", " + this.age + ", "+ this.dateofbirth +" and "+ this.placeofbirth;
		}

	}; // []--> Array {}--> Object

		console.log(objName.fun())