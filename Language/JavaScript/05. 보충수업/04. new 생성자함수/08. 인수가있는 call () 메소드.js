// TODO: call : 요구하다.!!!
// TODO: call 함수를 학습합니다.

// TODO: 인수가있는 call () 메소드


var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
const result = person.fullName.call(person1, "Oslo", "Norway");

console.log(result); // TODO: John Doe,Oslo,Norway