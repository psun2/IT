"use strict";
class Circle {
    // radius: number;
    // constructor(radius: number) {
    //   this.radius = radius;
    // }
    constructor(radius) {
        this.radius = radius;
        // 맴버 변수 자동 등록
        // public, private 는 ts 에서 제한을 둘수 있지만,
        // 자바스크립트로 변환 되면 의미가 없습니다....
    }
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}
class Ractangle {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //   this.width = width;
    //   this.height = height;
    // }
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // 맴버 변수 자동 등록
        // public, private 는 ts 에서 제한을 둘수 있지만,
        // 자바스크립트로 변환 되면 의미가 없습니다....
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const ractangle = new Ractangle(2, 5);
const shape = [circle, ractangle];
shape.forEach((shape) => {
    console.log(shape.getArea());
});
const person = {
    name: '김사람',
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react', 'typescript'],
};
