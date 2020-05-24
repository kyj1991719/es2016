"use strict"

var sports = "축구"
let music = "재즈";

function get() {
    var sports = "농구";
    let music = "클래식";
    //window.get()으로 호출시 window, get()호출시 undefined
    console.log(this);
    console.log("1:",sports);
    console.log("2:",this.sports);
    console.log("3:",this.music);
};
//1:농구, 2:축구, 3:undefined 출력
window.get();
//1:농구, 에러 출력
get();