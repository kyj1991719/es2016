"use strict"

/*
문자열과 변수를 조합하여 오브젝트의 프로퍼티 이름으로 사용할 수 있음
*/
//문자열을 조합하여 오브젝트의 프로퍼티 키로 사용할 수 있음
var item = {["one"+"two"]:12};
//output : 12
console.log(item.onetwo);

//변수값과 문자열도 조합 가능함
var item = "Bigitem";
var sports = {
    //프로퍼티명이 Bigitem
    [item]:1,
    //프로퍼티명이 BigitemBox
    [item+"Box"]:"paper",
    //프로퍼티명이 BigitemMethod
    [item+"Method"]() {
        return this[item];
    }
};
//output : 1
console.log(sports.Bigitem);
//output : paper
console.log(sports.BigitemBox);
//output : 1
console.log(sports.BigitemMethod());

//분할 할당에도 사용 가능함
var a = "test";
var {[a]: value} = {test: "ok"};
//output : ok
console.log(value);

/*
변수, 파라미터, 프로퍼티에 값이 할당되지 않을 때 사전에 정의한 값이 할당됨
*/
var [a,b,c=10] = [1,2];
//output : 10
console.log(c);

//default를 할당하였지만 77을 할당하여서 최종적으로 77이 할당됨
[a,b,c=10] = [1,2,77];
//output : 77
console.log(c);

//Object 오브젝트에서 디폴트값을 사용하는 형태
var {d, e=7} = {d:6};
//output : 6 7
console.log(d, e);

//디폴트값은 왼쪽에서 오른쪽으로 적용됨
var [a,b=a+1, c=b+3] = [1];
//output : 1 2 5
console.log(a,b,c);
var [x=y-1,y=z-3, z] = [, ,5];
//output : NaN NaN 5
console.log(x,y,z);

var plus = (a, b=2) => a+b;
//output : 3
console.log(plus(1));
//output : 3, undefined는 값을 넘겨주지 않는것으로 인식하여 디폴트값이 들어감
console.log(plus(1, undefined));
//output : 71
console.log(plus(1, 70));

//a,b에 분할할당으로 디폴트값이 선언
var getTotal = ([a,b] = [10,20]) => a+b;
//output : 30
console.log(getTotal());

//오브젝트 할당 형태로 디폴트값 선언
var getValue = ({a: val} = {a:20}) => val;
//output : 20
console.log(getValue());