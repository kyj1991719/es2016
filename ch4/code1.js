"use strict"

/*
이터레이션 프로토콜 : 해당 오브젝트가 반복 할 수 있는 오브젝트(이터러블 오브젝트)이며, 오브젝트에 반복 처리할 수 있는 메서드가 있어야 함(이터레이터 프로토콜)
이터러블 오브젝트에는 Symbol.iterator가 있어야함.
따라서 이터러블 오브젝트가 아닌 오브젝트이 Symbol.iterator을 추가하면 이터러블 오브젝트로 사용할 수 있음
*/

let arrayObj = [1, 2];
//Array 오브젝트에 Symbol.iterator 존재여부 확인
let arrResult = arrayObj[Symbol.iterator];
//output : ƒ values() { [native code] }
console.log(arrResult);

let objectObj = {};
//Object 오브젝트에 Symbol.iterator 존재여부 확인
let objResult = objectObj[Symbol.iterator];
//output : undefined
console.log(objResult);

//오브젝트의 값을 차례대로 처리할 수 있는 방법을 제공하며, next() 메소드로 구현함
let iter = arrayObj[Symbol.iterator]();
//output : object
console.log(typeof iter);
//output : {value: 1, done: false}
console.log(iter.next());
//output : {value: 2, done: false}
console.log(iter.next());
//output : {value: undefined, done: true}
//done이 true여야 이터레이터가 종료된것임
console.log(iter.next());