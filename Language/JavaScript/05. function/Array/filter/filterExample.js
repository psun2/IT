// 출처 : https://www.youtube.com/watch?v=rRgD1yVwIvE
// title : filter

const companies = [
  {
    name: "Company One",
    category: "Fianace",
    start: 1981,
    end: 2003
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1922,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Fianace",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// # NO filter - ages
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);
// [33, 54, 21, 44, 61, 45, 25, 64, 32]

// # filterr - ages
const canDrink = ages.filter(function(age) {
  if (age >= 21) {
    return true; // retuen 에 true 를 생략하면 오류가 난다.
  }
});

console.log(canDrink);
// [33, 54, 21, 44, 61, 45, 25, 64, 32]

// # filter arrow functionr - ages
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);
// [33, 54, 21, 44, 61, 45, 25, 64, 32]

// # filterr - companies
const retailCompanies = companies.filter(function(company) {
  if (company.category === "Retail") {
    return true;
  }
});

console.log(retailCompanies);
// [Object, Object, Object]
// 0: Object
// name: "Company Two"
// category: "Retail"
// start: 1922
// end: 2008
// 1: Object
// name: "Company Four"
// category: "Retail"
// start: 1989
// end: 2010
// 2: Object
// name: "Company Nine"
// category: "Retail"
// start: 1981
// end: 1989

// # filter arrow functionr - companies
const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
console.log(retailCompanies);
// [Object, Object, Object]
// 0: Object
// name: "Company Two"
// category: "Retail"
// start: 1922
// end: 2008
// 1: Object
// name: "Company Four"
// category: "Retail"
// start: 1989
// end: 2010
// 2: Object
// name: "Company Nine"
// category: "Retail"
// start: 1981
// end: 1989

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);
[Object, Object, Object, Object, Object];
// 0: Object
// name: "Company One"
// category: "Fianace"
// start: 1981
// end: 2003
// 1: Object
// name: "Company Four"
// category: "Retail"
// start: 1989
// end: 2010
// 2: Object
// name: "Company Six"
// category: "Fianace"
// start: 1987
// end: 2010
// 3: Object
// name: "Company Seven"
// category: "Auto"
// start: 1986
// end: 1996
// 4: Object
// name: "Company Nine"
// category: "Retail"
// start: 1981
// end: 1989

const lastTenYears = companies.filter(
  company => company.end - company.start >= 10
);
console.log(lastTenYears);
// [Object, Object, Object, Object, Object]
// 0: Object
// name: "Company One"
// category: "Fianace"
// start: 1981
// end: 2003
// 1: Object
// name: "Company Two"
// category: "Retail"
// start: 1922
// end: 2008
// 2: Object
// name: "Company Four"
// category: "Retail"
// start: 1989
// end: 2010
// 3: Object
// name: "Company Six"
// category: "Fianace"
// start: 1987
// end: 2010
// 4: Object
// name: "Company Seven"
// category: "Auto"
// start: 1986
// end: 1996
