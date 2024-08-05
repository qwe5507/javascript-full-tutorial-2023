/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){ // new를 안붙이면 undefined
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); // new를 안붙이면 함수에서 반환해주는게 없기때문에 undefined가 리턴된다.
// console.log(global.name); // new를 안붙이면 this키워드가 global에 붙는다.
// new를 쓰면 this가 인스턴스에 매핑되는데, new를 안쓰면 this가 global이 된다.
const IdolModelArrow = (name, year)=>{
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003); // 오류 : IdolModelArrow is not a constructor
// 애로우 함수는 생성자 함수로 사용할 수없다.