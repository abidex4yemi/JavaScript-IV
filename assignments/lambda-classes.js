// CODE here for your Lambda Classes

/**
 * @description Base constructor for all person to extend
 * @class {Person}
 * @param {String} name
 * @param {Number} age
 * @param {String} location
 * @param {String} gender
 * 
 * @returns {Object} Person
 */
class Person {
	constructor({ name, age, location, gender }) {
		this.name = name;
		this.age = age;
		this.location = location;
		this.gender = gender;
	}

	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

/**
 * @description Instructor extends person
 * @class Person
 * @param {String} name
 * @param {Number} age
 * @param {String} location
 * @param {String} gender
 * @param {String} specialty
 * @param {String} favLanguage
 * @param {String} catchPhrase
 * 
 * @returns {Object} Person
 */
class Instructor extends Person {
	constructor({ name, age, location, gender, specialty, favLanguage, catchPhrase }) {
		super({ name, age, location, gender });
		this.specialty = specialty;
		this.favLanguage = favLanguage;
		this.catchPhrase = catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}
