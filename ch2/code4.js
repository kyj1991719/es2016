"use strict"

let sports = "축구";
try {
    let sports = "농구";
    //농구 출력
    console.log(sports);

    var count = 1;
    switch(count) {
        case 1:
            let sports = "배구";
            //배구 출력
            console.log(sports);
    };
} catch(e) {}
//축구 출력
console.log(sports);

//에러가 발생하지는 않지만 undefined 출력
console.log(tmp1);
var tmp1 = "tmp1";

//에러 발생
try {
    console.log(tmp2);
    let tmp2 = "tmp2";
} catch(e) {
    console.error(e);
}

//const는 선언만 할 수 없음
const SPORTS = "축구";
try {
    //const는 선언후 변경이 불가능함
    SPORTS = "농구";
} catch(e) {
    console.log("const 재할당 불가");
}

const obj = {lang: "한글"};
try {
    //const는 선언후 변경이 불가능함
    obj = {};
} catch(e) {
    console.log("const 재할당 불가");
}
//프로퍼티에 값을 할당할 수 있음
obj.lang = "영어";
console.log(obj.lang);