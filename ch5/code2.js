"use strict"

/*
spread 연산자로 파라미터를 작성한 형태를 rest 파라미터라고 함. 파라미터의 나머지 값들을 배열 얼리먼트로 설정됨
function(param, paramN, ...rest)
*/

let get = (a) => {
    //output : 1
    console.log(a);
};

let get2 = (...rest) => {
    //output : (3) [1, 2, 3]
    console.log(rest);
    //output : true
    console.log(Array.isArray(rest));
};

let get3 = (a, ...rest) => {
    //output : 1
    console.log(a);
    //output : (2) [2, 3]
    console.log(rest);
};

get(...[1,2,3]);
get2(...[1,2,3]);
get3(...[1,2,3]);

/*
Array는 아니지만 Array 처럼 사용할 수 있는 Object 오브젝트를 Array-like라고함
*/
let val = {0:"zero",1:"one",2:"two",length:3};
for(var key in val) {
    /*
    0 : zero
    1 : one
    2 : two
    length : 3
    */
    console.log(key,':', val[key]);
}

for(var k = 0; k < val.length; k++) {
    /*
    zero
    one
    two
    */
    console.log(val[k]);
}

/*
완전한 Array-like 형태는 키값이 0부터 순차적으로 증가해야함, 아닐경우 정확한 Array-like 형태는 아님
*/
let val2 = {10:"ten",zoo:"동물원",2:"two", length:3};
for(var key in val2) {
    /*
    2 : two
    10 : ten
    zoo : 동물원
    length : 3
    */
    console.log(key,':', val2[key]);
}

for(var k = 0; k < val2.length; k++) {
    /*
    undefined
    undefined
    two
    */
    console.log(val2[k]);
}

/*
rest와 arguments 차이
Argument 오브젝트는 Array-like이므로 Array 오브젝트의 메서드를 사용할 수 없음. 화살표 함수에서 사용 불가
rest는 배열이므로 Array 오브젝트의 메서드를 사용할 수 있음. 화살표 함수에서 사용 가능
*/