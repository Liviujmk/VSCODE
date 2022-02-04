
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Resident extends Person {
	constructor(name, age, city) {
		super(name, age);
		this.city = city;
	}
}

class House {
	constructor(name, adress, resident)  { 
		this.name = name;
		this.adress = adress;
		this.resident = resident;
	}
	getResident = () => {
		return this.resident;
	};
	addResident = resident => {
		this.resident.push(resident);
	};
}

const casaLuiEdi = new House('Lacatus-Mansion', 'PoieniPolis', [{}]);
const Edi = new Person('Edi', 18);
casaLuiEdi.addResident(Edi);

document.querySelectorAll('p.sh').forEach(sh => {
	console.log(sh.innerHTML);
	sh.innerHTML = casaLuiEdi.name
})