// TODO: call : 요구하다.!!!
// TODO: call 함수를 학습합니다.

// TODO: 익명 함수 호출에 call 사용

let animals = [
    {species: 'Lion', name: 'King'},
    {species: 'Whale', name: 'Fail'}
];

for (let i = 0; i < animals.length; i++) {
    (function(i) {
        this.print = function() {
            console.log(`# ${i} ${this.species} : ${this.name}`)
        }
        this.print();
    }).call(animals[i], i);
}

// TODO: # 0 Lion : King
// TODO: # 1 Whale : Fail