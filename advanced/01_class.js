// JS는 접근제어자가 없다.... public, protected, private
// get, set
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
        if (value > 20) {
            value = 20;
        }
        this._age = value;
    }
}

const animal = new Animal("dog", 3);
console.log(animal);

console.log(animal.name)
console.log(animal.age)

animal.age = 25;
console.log(animal.age)


class Human extends Animal {
    constructor(name, age, job) {
        // super = 부모의 생성자
        super(name, age);
        this._job = job;
    }


    get job() {
        return this._job;
    }

    set job(value) {
        this._job = value;
    }
}

const human = new Human('rogee', 33, 'developer');
console.log(human);
