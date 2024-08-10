/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical 
 * environemnt within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 *
 * 쉽게 얘기하면
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());
// 이미 getNumber() 의 execution context가 끝난 다음(call stack에 getNumber()없어짐)에 innerGetNumber를 실행
// 이 경우가 상위함수보다 하위함수가 더 오래 살아남는 경우

/**
 * 어디다 쓸까?
 */
/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
    // 아래 계산은 매우 오래걸린다는 가정을 했을때
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10)); // 이 경우에는 클로저로 오래 걸리는 계산을 한번만 했음
console.log(runner2(20)); // 이 경우에는 클로저로 오래 걸리는 계산을 한번만 했음

// 반복적으로 특정값을 변환해야 할 때
function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year); // 이 값은 존재하지 않습니다.