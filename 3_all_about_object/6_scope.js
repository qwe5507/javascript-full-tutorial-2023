/**
 * Scope
 */
var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}
// 상위스코프 접근가능
// levelOne();

function levelOne(){
    var numberOne = 40;

    console.log(numberOne); // 40
}

// levelOne();

console.log(numberOne); // 20

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`); // 99
        console.log(`levelTwo numberOne : ${numberOne}`); // 40
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`); // 40
}

levelOne();
console.log(numberOne); // 20
// console.log(numberTwo); // error

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree); // 3 , JS는 렉시컬스코프기 때문에
}

functionOne();

var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`) // 10

i = 999;
// block level scope
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`); // 999

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */