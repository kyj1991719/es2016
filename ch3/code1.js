"use strict"
/*
화살표 함수는 function(param) {code}를 (param) => {code} 형태로 축약한 것
- (param) => {code}
- param => {code}
- () => {code}
- (param1, param2 ... paramN) => {code}
- param => ({key: value})
//화살표 함수에서는 es5의 arguments 대신 rest 파라미터를 사용함
- (param1, param2, ...rest) => {code}
- (param1, param2=123, ... paramN) => {code}
- ([param1, param2] = [1,2]) => param1+param2
- ({key: sum} = {key:10+20}) => {code}
*/
//function 키워드로 함수 선언, new 연산자로 인스턴스 생성 가능
var es5 = function(a, b) {
    return a+b;
}

//화살표 함수로 선언, new 연산자로 인스턴스 생성 불가능
let es6 = (a, b) => {
    return a+b;
}

new es5();
try {
    new es6();
} catch(err) {
    console.error("화살표 함수 인스턴스 생성 불가능");
}

let total = (a,b) => a+b;
//화살표 앞에서 줄을 분리하면 에러 발생
// let totalTest = (a,b) 
//     => a+b;

//output : 3 3 3
console.log(es5(1,2), es6(1,2), total(1,2));

//파라미터가 하나일경우 괄호 제외 가능
let get = value => value+10;
//파라미터가 없는경우 소괄호만 작성함
let noParam = () => 3+4;
//output : 30 7
console.log(get(20), noParam());

//화살표 다음의 {}를 함수 블록으로 인식하므로 undefined 반환
let sp1 = () => {};
//Ojbect 오브젝트 반환
let sp2 = () => ({sports: "축구"});
//output : undefined {sports: "축구"}
console.log(sp1(), sp2());

