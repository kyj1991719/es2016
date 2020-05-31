"use strict"

/*
스프레드(spread)연산자는 이터러블 오브젝트의 엘리먼트를 하나씩 분리하여 전개함
[...iter] 또는 function(...iter) 같이 사용함
*/
let one = [11,12];
let two = [21,22];
let spreadObj = [51, ...one, 52, ...two];
//output : (6) [51, 11, 12, 52, 21, 22]
console.log(spreadObj);
//output : 6
console.log(spreadObj.length);

//music이 전개대상
let strObj = [..."music"];
//output : (5) ["m", "u", "s", "i", "c"]
console.log(strObj);

//함수의 파라미터 값을 spreaad 연산자로 작성하면, 함수를 호줄하기 전에 파라미터값을 분리, 전개함
let val = [10,20,30];
//output : 60
get(...val);
function get(a,b,c){
    console.log(a+b+c);
};
