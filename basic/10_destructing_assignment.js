const list = ['oh', 'rogee', 33];
// const lastName = list[0];
// const firstName = list[1];
// const age = list[2];
const [lastName, firstName, age, notExist] = list;

console.log(lastName, firstName, age);
console.log(notExist); // undefined
console.log(list[100]); // undefined


const laptop = {
    type: 'macbook',
    price: 300,
    manufacturer: 'Apple'
};

// const type = laptop.type;
// const price = laptop.price;
// const manufacturer = laptop.manufacturer;

const {type, price, manufacturer} = laptop;
console.log(type, price, manufacturer);
