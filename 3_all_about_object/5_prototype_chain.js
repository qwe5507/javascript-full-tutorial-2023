/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);
// 숨겨져있어서 showHidden 해야 보인다.
console.dir(IdolModel.prototype, {
    showHidden: true,
});
// prototype에는 constructor가 있는데 IdolModel함수가 들어가 있다.

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

console.log(yuJin.toString());
console.log(Object.prototype.toString()); // Object.prototype가 toString()을 가지고 있어 사용가능

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false
//

console.log(yuJin2.hasOwnProperty('sayHello')); // 상속을 받은 프로퍼티인지, 고유한 프로퍼티 인지 // true

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true

console.log(yuJin3.hasOwnProperty('sayHello')); // false

IdolModel3.sayStaticHello = function () {
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
}

IdolModel4.prototype.sayHello = function () {
    return '안녕하세요 저는 prototype 메서드입니다!';
}

const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 * (JS는 일반적인 OOP룰을 따르지 않는게 많아서, 상속을 변경하는 거나 다름없는 __proto__, prototype을 변경할 수 있다.)
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);


console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true
// console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype); // __proto__ 변경
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel);  // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

FemaleIdolModel.prototype = IdolModel.prototype; // prototype 변경

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
