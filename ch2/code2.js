"use strict";

/*
let 변수
1. 각각의 블록(함수, if문 등)이 스코프
2. 같은 스코프에서 같은 이름의 let 변수를 선언할 수 없음
3. let변수는 호이스팅 되지 않음
*/
//선언방법
let book;
let sports = "축구";
let one=1, two=2, three;

//동일한 이름으로 선언하여 에러 발생
//let sports = "배구"

//let을 두번 사용하여서 에러 발생
//let four = 4, let five = 5;

//let과 var을 같이 사용하여서 에러 발생
//let six = 6, var seven = 7;


if(sports) {
    let sports = "농구";
    //농구 출력
    console.log("블록 : ",sports);
}
//축구 출력
console.log("글로벌 : ",sports);

var music = "음악";
//window 오브젝트 출력
console.log(this);
//음악 출력
console.log(this.music);
//undefined 출력, window 오브젝트에 let 변수가 설정되지 않음
console.log(this.sports);