// TODO: call : 쓰다, 응하다
// TODO: apply 함수를 학습합니다.

// TODO: 인수가있는 apply () 메소드

// call ()과 apply ()의 차이점

// call()메소드는 인수를 별도로 취 합니다 .

// apply()메소드는 인수를 배열로 사용 합니다.

// apply () 메소드는 인수 목록 대신 배열을 사용하려는 경우 매우 유용합니다.

var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "Hot",
    lastName: "Dog"
}
const result = person.fullName.apply(person1, ["Cake", "stir-fried Rice Cake"]);
console.log(result); // Hot Dog,Cake,stir-fried Rice Cake

// TODO: 배열에서 최대 방법 시뮬레이션

console.log(Math.max(1,2,3)) // 3
const arr = [1,2,3];
console.log(Math.max.apply(null, arr)); // 3

// TODO: 첫 번째 인수 (null)는 중요하지 않습니다. 이 예에서는 사용되지 않습니다.
// TODO: 이 예제는 동일한 결과를 제공합니다.

console.log(Math.max.apply(Math, arr)); // 3
console.log(Math.max.apply(" ", arr)); // 3
console.log(Math.max.apply(0, arr)); // 3

// TODO: 자바 스크립트 엄격한 모드
// TODO: JavaScript 엄격 모드에서 apply()메소드 의 첫 번째 인수가 오브젝트가 아닌 경우 
// TODO: 호출 된 함수의 소유자 (오브젝트)가됩니다. "엄격하지 않은"모드에서는 전역 객체가됩니다.

