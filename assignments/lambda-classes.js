// CODE here for your Lambda Classes

/**
 * @description Create new Person instance
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
 * @description Create new Instructor instance
 * @class Person
 * @param {String} name
 * @param {Number} age
 * @param {String} location
 * @param {String} gender
 * @param {String} specialty
 * @param {Array} favLanguage
 * @param {String} catchPhrase
 * 
 * @returns {Object} Instructor
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

/**
 * @description Create new Student instance
 * @class Student
 * @param {String} name
 * @param {Number} age
 * @param {String} location
 * @param {String} gender
 * @param {String} previousBackground
 * @param {String} className
 * @param {String} favSubjects
 * 
 * @returns {Object} Student
 */
class Student extends Person {
	constructor({ name, age, location, gender, previousBackground, className, favSubjects }) {
		super({ name, age, location, gender });
		this.previousBackground = previousBackground;
		this.className = className;
		this.favSubjects = favSubjects;
	}

	listsSubjects() {
		this.favSubjects.forEach(favSubject => {
			console.log(`One of ${this.name}'s favorite subject is ${favSubject}`);
		});
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
}

/**
 * @description Create new ProjectManagers instance
 * @class ProjectManagers
 * @param {String} name
 * @param {Number} age
 * @param {String} location
 * @param {String} gender
 * @param {String} specialty
 * @param {Array} favLanguage
 * @param {String} catchPhrase
 * 
 * @returns {Object} ProjectManagers
 */
class ProjectManagers extends Instructor {
	constructor({ name, age, location, gender, specialty, favLanguage, catchPhrase, gradClassName, favInstructor }) {
		super({ name, age, location, gender, specialty, favLanguage, catchPhrase });

		this.gradClassName = gradClassName;
		this.favInstructor = favInstructor;
	}

	standUp() {
		console.log(`${this.name} announces to ${this.gradClassName}, @channel standy time!​​​​​`);
	}

	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}

// instructor instance
const gabe = new Instructor({
	name: 'Gabe',
	location: 'Austin',
	age: 40,
	gender: 'male',
	favLanguage: 'JavaScript, React-js',
	specialty: 'Back-end',
	catchPhrase: `Don't forget the homies`
});

const fred = new Instructor({
	name: 'Fred',
	location: 'Bedrock',
	age: 37,
	gender: 'male',
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: `Don't forget the homies`
});

// student instance
const yemi = new Student({
	name: 'Yemi',
	age: 70,
	location: 'Lagos',
	gender: 'M',
	previousBackground: 'web dev',
	className: 'WEBEU2',
	favSubjects: ['Javascript', 'CSS', 'NODE', 'PHP']
});

// instructor instance
const jane = new Student({
	name: 'Jane',
	age: 18,
	location: 'London',
	gender: 'F',
	previousBackground: 'Front-end',
	className: 'WEBEU1',
	favSubjects: ['Javascript', 'CSS', 'NODE', 'Go']
});

const maxim = new ProjectManagers({
	name: 'Maximesalomon',
	age: 65,
	location: 'Paris',
	gender: 'M',
	specialty: 'Full-stack web',
	favLanguage: ['CSS', 'Javascript', 'NODEJS', 'REACT'],
	catchPhrase: 'I am always here for you',
	gradClassName: 'WEBEU1',
	favInstructor: 'Gabe'
});

const john = new ProjectManagers({
	name: 'John Doe',
	age: 80,
	location: 'London',
	gender: 'M',
	specialty: 'Backend',
	favLanguage: ['Java', 'Go', 'NODEJS', 'c#'],
	catchPhrase: 'We will be alright',
	gradClassName: 'WEBEU1',
	favInstructor: 'Jane Harry'
});

// Test instructor code
console.log(gabe.demo('Javascript IV'));
console.log(gabe.grade(yemi, 'Javascript'));
console.log(fred.demo('Advance CSS'));
console.log(fred.grade(jane, 'LESS'));

// Test student code
console.log(yemi.listsSubjects());
console.log(yemi.PRAssignment('Preprocessing II'));
console.log(yemi.sprintChallenge('Preprocessing I'));

console.log(jane.listsSubjects());
console.log(jane.PRAssignment('Preprocessing II'));
console.log(jane.sprintChallenge('Preprocessing I'));

// Test project managers
console.log(maxim.standUp());
console.log(maxim.debugsCode(yemi, 'Javascript IV'));

console.log(john.standUp());
console.log(john.debugsCode(jane, 'Javascript III'));
