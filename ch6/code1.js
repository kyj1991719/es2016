"use strict"

/*
배열 또는 오브젝트에 작성된 여러개의 값을 한번에 변수에 할당할 수 있음
오른쪽 배열을 분할하고 엘리먼트 값을 왼쪽 변수에 할당하는 측면에서, 이책에서는 분할 할당으로 표기함
*/
var a,b,c,d,e;
const values = [1,2,3];

[a,b,c] = values;
//output : 1 2 3
console.log(a,b,c);

[a,b] = values;
//output : 1 2
console.log(a, b);

//4번째 변수느느 values에 선언되어 있지 않으므로 d는 undefined로 선언됨
[a,b,c,d] = values;
//output : 1 2 3 undefined
console.log(a,b,c,d);

[a,b,[c,d]] = [1,2,[73,74]];
//output : 1 2 73 74
console.log(a,b,c,d);

//콤마로 작성하면 해당하는 인덱스를 건너뛰고 다음변수로 이동함
[a, , , d] = [1,2,3,4];
//output : 1 4
console.log(a,d);

let other;
//spread 연산자로 변수 작성시 나머지가 할당됨
[a, ...other] = [1,2,3,4];
//output : 1 (3) [2, 3, 4]
console.log(a, other);

/*
Object 분할 할당은 Object 오브젝트를 프로퍼티 단위로 분할한 다음 프로퍼티 키와 이름이 같은 왼쪽 변수값에 할당함
*/
//오브젝트 할당에서 선언과 변수를 동시에 하는 경우
var {a,b} = {a:1, c:9};
//output : 1 undefined
console.log(a, b);

var c,d;
//오브젝트 할당에서 사전에 선언된 변수를 사용하는 경우
({c,d} = {c:3, d:4});
//output : 3 4
console.log(c, d);

var x, y;
//프로퍼티 키값이 같은 x,y에 값이 할당됨
({a:x, b:y} = {a:10, b:20});
//output : 10 20
console.log(x, y);

//프로퍼티 키값이 같은 a,b에 값이 할당됨
var {a, plus:{b}} = {a:10, plus:{b:20}};
//output : 10 20
console.log(a, b);
//plus는 구조를 맞추기 위해 사용한것으로, 접근하거나 이름을 바꾸면 에러가 발생함.
try {
    console.log(plus);
} catch(err) {
    console.error(err);
}

/*
파라미터 분할 할당은 오브젝트 분할 할당 형태로 작성하면 됨
*/
function total({a, plus: {b, c}}) {
    //output : 6
    console.log(a+b+c);
};
total({a:1, plus:{b:2, c:3}});