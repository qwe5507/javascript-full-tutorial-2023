/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다. 
 * 
 * *****하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */
const testFunction = function(){
    return this;
}

console.log(testFunction()); // 일반 함수의 this는 글로벌에 매핑된다.
console.log(testFunction() === global); // true

const yuJin = {
    name: '안유진',
    year: 2003,
    sayHello: function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    },
}

console.log(yuJin.sayHello());

function Person(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을춥니다.`;
    }

    return dance2();
}
console.log(yuJin2.dance()); // undefined이 춤을 춥니다.
// 객체의 메서드(객체의 가장 상위레벨 함수)에 this는 자동으로 객체로 매핑이 되지만
// 그 외의 위치에다 함수를 선언하면 함수의 this는 무조건 global object로 매핑된다.

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면된다. **
 * 
 * 1) 일반 함수 호출할땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */
// 일반적인 OOP는 메소드안에 this는 무조건 객체에 매핑된다. JS와 다름

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName(){
    return this.name;
}

console.log(returnName());

const yuJin3 = {
    name: '안유진',
}

console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply ->  아규먼트를 리스트로 입력해야한다.
 *
 * 이 두개는 바로 실행됨
 */
function multiply(x, y, z){
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));

/**
 * bind()
 *
 * call과 apply와 다르게 바로실행되지 않음
 */
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());