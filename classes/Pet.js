/**
 * Created by aviad on 9/11/2016.
 */

export default class Pet {
	constructor(name, age, sex, type) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.type = type;
	}
	
	get name() {
		return this.name;
	}
	
	set name(name) {
		this.name = name;
	}
	
	get age() {
		return this.age;
	}
	
	set age(age) {
		this.age = age;
	}
	
	get sex() {
		return this.sex;
	}
	
	set sex(sex) {
		this.sex = sex;
	}
	
	get type() {
		return this.type;
	}
	
	set type(type) {
		this.type = type;
	}
	
	toJSON() {
		return {
			name: this.name,
			age: this.age,
			sex: this.sex,
			type: this.type
		}
	}
}