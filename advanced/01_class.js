class Animal {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

const animal = new Animal('jindo', 3);
// getter
console.log(animal.name, animal.age);

// setter
animal.name = 'baekgu';
animal.age = 1;

// value changed
console.log(animal.name, animal.age);


class Human extends Animal {
    constructor(name, age, job) {
        super(name, age);
        this._job = job;
    }


    get job() {
        return this._job;
    }

    set job(value) {
        if (value === 'freelancer') {
            console.error(`job cannot be freelancer`);
            return;
        }
        this._job = value;
    }
}

const human = new Human('rogee', 33, 'developer');
console.log(human.name, human.age, human.job);

human.job = 'student';
console.log(human.name, human.age, human.job);
