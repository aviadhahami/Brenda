/**
 * Created by aviad on 9/11/2016.
 */
	
class Pet {
	constructor(name, age, sex, type) {
		this._name = name;
		this._age = age;
		this._sex = sex;
		this._type = type;
		this._owners = [];
	}
	get name() {
		return this._name;
	}
	
	set name(name) {
		this._name = name;
	}
	
	get age() {
		return this._age;
	}
	
	set age(age) {
		this._age = age;
	}
	
	get sex() {
		return this._sex;
	}
	
	set sex(sex) {
		this._sex = sex;
	}
	
	get type() {
		return this._type;
	}
	
	set type(type) {
		this._type = type;
	}
	
	get owners(){
		return this._owners;
	}
	
	set owners(uid){
		this._owners.push(uid);
	}
	toJSON() {
		// let owners
		return {
			name: this.name,
			age: this.age,
			sex: this.sex,
			type: this.type,
			owners: this.owners
		}
	}
}

export default Pet;