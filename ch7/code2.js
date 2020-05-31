"use strict"

/*
for-of문은 이터러블 오브젝트를 반복하여 처리함
*/
//Array 반복
for(var value of [10,20,30]) {
    /*
    10
    20
    30
    */
    console.log(value);
}

//String 사용
for(var value of "ABC") {
    /*
    A
    B
    C
    */
    console.log(value);
}

var values = [
    {item: "item1", amount:{a:10, b:20}},
    {item: "item2", amount:{a:30, b:40}}
];
//오브젝트 디스트럭처링(분할할당)을 통해서
//one 변수에 values의 item에 할당된 값
//two 변수에 values의 amount.a에 할당된 값
//three 변수에 values의 amount.b에 할당된 값
//이 할당됨
for(var {item: one, amount:{a:two, b:three}} of values) {
    /*
    item1 10 20
    item2 30 40
    */
    console.log(one, two, three);
}

/**
 * for-in문의 대상은 Object 오브젝트이며 열거 가능한 프로퍼티가 대상임
 * for-of문의 대상은 이터러블 오브젝트이며 prototype에 연결된 프로퍼티는 대상이 아님
 */
//values는 Array오브젝트
var values = [10,20,30];
//Array오브젝트의 prototype에 메서드를 추가하였으므로, values.music() 형태로 호출할 수 있음
Array.prototype.music = function() {
    return "음악";
};
//Object오브젝트의 prototype에 메서드를 추가하였으므로, values.sports() 형태로 호출할 수 있음
Object.prototype.sports = function() {
    return "스포츠";
};
for(var key in values) {
    /*
    0 10
    1 20
    2 30
    music ƒ () {
        return "음악";
    }
    sports ƒ () {
        return "스포츠";
    }
    */
    //빌트인으로 설정된 메서드들은 열거되지 않지만, 개발자 코드로 추가한 메서드느느 열거됨
    console.log(key, values[key]);
};
console.log("<<<for-of>>>");
for(var val of values) {
    /*
    10
    20
    30
    */
    //prototype에 연결된 프로퍼티가 열거되지 않음
    console.log(val);
}

//for-of로 Object를 열거하기 위해서는 Object의 프로퍼티 키르르 배열로 변환하여 프로퍼티 값을 호출하는 형태로 해야함
var sports = {soccer:"축구", baseball: "야구"};
var keyList = Object.keys(sports);
for(var key of keyList) {
    /*
    soccer 축구
    baseball 야구
    */
    console.log(key, sports[key]);
}
