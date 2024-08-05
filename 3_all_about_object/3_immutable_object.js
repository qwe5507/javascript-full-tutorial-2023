/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible - 확장 가능한지
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브'; // 추가 안됨
console.log(yuJin);

// 삭제는 할 수 있고 추가만 할 수 없다.
delete yuJin['position'];
console.log(yuJin);

/**
 * Seal
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); // 기본값은 false

Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);

// seal(봉인) 하면 추가/삭제 불가상태가 된다.
// seal은 configurable이 false로 변경된다.
delete yuJin2['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// })
// freeze는 enumerable 뺴고 전부 false가 된다.
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);
// 상위 object를 freeze를 했다고해서 하위 object도 freeze가 되는것은 아님(Extensible, Seal도 마찬가지)

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));