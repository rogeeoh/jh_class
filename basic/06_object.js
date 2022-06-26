//
const obj = {};
const obj2 = {};

// 주소값 기준으로 두 개는 다르다
console.log(obj === obj2);
obj.name = 'rogee';
obj.age = 33;

console.log(obj);
console.log(obj.name);
console.log(obj.age);
// undefined
console.log('challenge: ', obj.birthday);

// name을 지운다
// 근데 성능에 안좋다.
delete obj["name"];
console.log(obj);

// nested object
const employee = {
  id: 1,
  company: 'kakao',
  gender: 'unknown',
  additionalInfo: {
    name: 'rogee',
    age: 33,
  },
};

console.log(employee);

// object 합치기
const gender = {gender: 'male'};

const newObject = {};
// 첫번째 인자: 어디에 합쳐줄 것이냐
// 두번째 이후: 어떤 object를 합칠 것이냐
// old 문법
Object.assign(newObject, employee, gender);
console.log(newObject)

// 최신 문법
// 동일한 key가 존재할 경우 마지막에 위치하는 key의 값으로 override한다.
console.log({
  ...employee,
  ...gender,
});

// object 안의 key값들을 list로 반환
const keys = Object.keys(employee)
console.log(keys);

// object 안의 value값들을 list로 반환
const values = Object.values(employee);
console.log(values);

console.log(typeof keys);