// TODO: Math 의 내장 function(random, ceil, floor)

const body = document.querySelector('body'),
  random = body.querySelector('.js-random'),
  ceil = body.querySelector('.js-ceil'),
  floor = body.querySelector('.js-floor');

console.log(body, random, ceil, floor);
console.dir(body, random, ceil, floor);

const element = [random, ceil, floor];
let math = [];

function loadpaint() {
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const randomMath = Math.random();
  const ceilMath = Math.ceil(randomMath);
  const floorMath = Math.floor(randomMath);
  const mathFunction = [];
  mathFunction.push(randomMath, ceilMath, floorMath);
  console.log(mathFunction);

  //   mathFunction.map((arg) => {
  //     math.push(arg);

  mathFunction.forEach((arg) => {
    math.push(arg);
  });
  console.log(math);

  //   let spanArray = [];

  //   for (let i = 0; i < math.length; i++) {
  //     const span = {
  //       id: i,
  //       content: document.createElement('span'),
  //     };
  //     spanArray.push(span);
  //   }

  //   console.log(spanArray);

  //   spanArray.forEach((arg) => {
  //     arg.innerText = mathFunction.forEach((argument) => {
  //       argument;
  //     });
  //     element.forEach((arg2) => {
  //       arg2.append(JSON.stringify(arg));
  //     });
  //   });

  span1.innerText = randomMath;
  random.append(span1);
  span2.innerText = ceilMath;
  ceil.append(span2);
  span3.innerText = floorMath;
  floor.append(span3);
}

console.log(math);

function init() {
  loadpaint();
}

init();
