"use strict"

/*
화살표 함수에서 this 참조시 고려해야함
*/
let Sports = function() {
    this.count = 20;
};
Sports.prototype = {
    plus: function() {
        this.count+=1;
    },
    get: function() {
        //function으로 setTimeout() 함수의 콜백 설정
        setTimeout(function() {
            //window 오브젝트 출력
            console.log(this);
            //undefined 출력
            console.log(this.plus);
            console.log("=====================");    
        }, 1000);

        //화살표 함수로 setTimeout() 함수의 콜백 설정
        setTimeout(() => {
            //Sports 오브젝트 출력
            console.log(this);
            //위에서 선언한 plus func 출력
            console.log(this.plus);
            console.log("=====================");    
        }, 2000);
        //Sports 오브젝트 출력
        console.log(this);
        //위에서 선언한 plus func 출력
        console.log(this.plus);
        console.log("=====================");
    },
    //prototype에 화살표 함수를 연결하면 화살표 함수 블록에서 this가 인스턴스를 참조하지 못함
    add: () => {
        //window 오브젝트 출력
        console.log(this);
        this.count += 1;
    }
}

let tmp = new Sports();
tmp.get();

tmp.add();
//output : 20, tmp인스턴스의 count값 출력
console.log(tmp.count);
//output : NaN, add에서 window에 선언되어있지 않은 count값을 증가시켜 NaN으로 출력됨
console.log(window.count);