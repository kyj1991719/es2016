"use strict";

//use strict를 선언하고 var을 사용하지 않으면 에러 발생함
var one = 100;
function get(){
    one = 300;
    console.log("함수 : "+one);
}
get();
console.log(one);
