class Hero {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(this.name);
    return this.name;
  }

  attack() {
    const attack = '기본공격';
    console.log('기본공격');
    return attack;
  }
}

class Warrior extends Hero {
  constructor(name) {
    super(name);
  }

  groundCutting() {
    const attack = '대지가르기 !';
    console.log('대지가르기 !');
    return attack;
  }
}

class Archer extends Hero {
  constructor(name) {
    super(name);
  }

  fireArrow() {
    const attack = '불화살 !';
    console.log('불화살 !');
    return attack;
  }
}

class Wizard extends Hero {
  constructor(name) {
    super(name);
  }

  freezing() {
    const attack = '얼리기 !';
    console.log('얼리기 !');
    return attack;
  }
}

const heros = [];
heros.push(new Warrior('전사'));
heros.push(new Archer('궁수'));
heros.push(new Wizard('마법사'));
// console.log(heros[0].print());
// console.log(heros[0].attack());
// console.log(heros[0] instanceof Object);

// for(let i = 0; i < 3; i++) {
//     heros[i].push(new Warrior("전사"));
// }

// const a = '씨이발 출력이 왜 안돼 ? !';
// document.write(a);
// document.write(heros[0].attack());

// console.log(heros[0] instanceof Warrior);
// console.log(heros[0] instanceof Object);
// document.write(heros[0] instanceof Warrior);
// document.write('<br>');

for (let i = 0; i < heros.length; i++) {
  const body = document.querySelector('body');
  const createDiv = document.createElement('div');
  const createSpan = document.createElement('span');
  heros[i].print();
  heros[i].attack();

  document.write(heros[i].print() + '<br>');
  document.write(heros[i].attack() + '<br>');

  if (heros[i] instanceof Warrior) {
    heros[i].groundCutting();

    document.write(heros[i].groundCutting() + '<br>');
  } else if (heros[i] instanceof Archer) {
    heros[i].fireArrow();

    document.write(heros[i].fireArrow() + '<br>');
  } else {
    heros[i].freezing();

    document.write(heros[i].freezing() + '<br>');
  }

  console.log('');
  document.write('<br>');
}

// console.log(heros[0].name);
// console.log('');
// console.log(heros[0].print());
// console.log('');
// console.log(heros[0].name === heros[0].print());

// for (let i = 0; i < heros.length; i++) {
//   heros[i].print();
//   heros[i].attack();

//   if (heros[i].name === Warrior.name) {
//     heros[i].groundCutting();
//   } else if (heros[i].name === Archer.name) {
//     heros[i].fireArrow();
//   } else {
//     heros[i].freezing();
//   }
//   console.log('');
// }
