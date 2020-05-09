// 출처 : https://www.youtube.com/watch?v=rRgD1yVwIvE
// title : reduce

const companies = [
{name: "Company One", category: "Fianace", start: 1981, end: 2003},
{name: "Company Two", category: "Retail", start: 1922, end: 2008},
{name: "Company Three", category: "Auto", start: 1999, end: 2007},
{name: "Company Four", category: "Retail", start: 1989, end: 2010},
{name: "Company Five", category: "Technology", start: 2009, end: 2014},
{name: "Company Six", category: "Fianace", start: 1987, end: 2010},
{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
{name: "Company Eight", category: "Technology", start: 2011, end: 2016},
{name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let ageSum = 0;
for(let i =0; i < ages.length; i++) {
    ageSum += ages[i];
}

console.log(ageSum); // 460

const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);
console.log(ageSum); // 460

const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum); // 460

// Get total years for all companies

const totalYears = companies.reduce(function(total, company) {
    return total +  (company.end - company.start);
}, 0);
console.log(totalYears); // 188

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears); // 188

// combine Methods

const combined = ages
    .map(age => age * 2)

console.log(combined);
// [66, 24, 40, 32, 10, 108, 42, 88, 122, 26, 30, 90, 50, 128, 64]

const combined = ages
    .map(age => age * 2)
    .sort((a, b) => a - b);

console.log(combined);
// [10, 24, 26, 30, 32, 40, 42, 50, 64, 66, 88, 90, 108, 122, 128]

const combined = ages
  .map(age => age * 2)
  .reduce((total, age) => total + age, 0);

console.log(combined); // 920


const combined = ages
    .map(age => age * 2)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0)

console.log(combined); // 920

const combined = ages
  .map(age => age * 2)
  .sort((a, b) => a - b)
  .filter(age => age > 50)
  .reduce((total, age) => total + age, 0);

console.log(combined); // 666