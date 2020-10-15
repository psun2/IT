// 출처 : https://www.youtube.com/watch?v=rRgD1yVwIvE
// title : map

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

// Create array of company names

const companyNames = companies.map(function(company) {
    return company.name; 
});

console.log(companyNames);
// ["Company One", "Company Two", "Company Three", "Company Four", "Company Five", "Company Six", "Company Seven", "Company Eight", "Company Nine"]


const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
  });
  console.log(testMap);
  // ["Company One [1981 - 2003]", "Company Two [1922 - 2008]", "Company Three [1999 - 2007]", "Company Four [1989 - 2010]", "Company Five [2009 - 2014]", "Company Six [1987 - 2010]", "Company Seven [1986 - 1996]", "Company Eight [2011 - 2016]", "Company Nine [1981 - 1989]"]
  // 0: "Company One [1981 - 2003]"
  // 1: "Company Two [1922 - 2008]"
  // 2: "Company Three [1999 - 2007]"
  // 3: "Company Four [1989 - 2010]"
  // 4: "Company Five [2009 - 2014]"
  // 5: "Company Six [1987 - 2010]"
  // 6: "Company Seven [1986 - 1996]"
  // 7: "Company Eight [2011 - 2016]"
  // 8: "Company Nine [1981 - 1989]"

const testMap = companies.map(company => `${conmapn.name} [${company.start} - ${company.end}]`);
console.log(testMap);
// ["Company One [1981 - 2003]", "Company Two [1922 - 2008]", "Company Three [1999 - 2007]", "Company Four [1989 - 2010]", "Company Five [2009 - 2014]", "Company Six [1987 - 2010]", "Company Seven [1986 - 1996]", "Company Eight [2011 - 2016]", "Company Nine [1981 - 1989]"]
// 0: "Company One [1981 - 2003]"
// 1: "Company Two [1922 - 2008]"
// 2: "Company Three [1999 - 2007]"
// 3: "Company Four [1989 - 2010]"
// 4: "Company Five [2009 - 2014]"
// 5: "Company Six [1987 - 2010]"
// 6: "Company Seven [1986 - 1996]"
// 7: "Company Eight [2011 - 2016]"
// 8: "Company Nine [1981 - 1989]"

const agesSquard = ages.map(age => Math.sqrt(age));
console.log(agesSquard);
// [5.744562646538029, 3.4641016151377544, 4.47213595499958, 4, 2.23606797749979, 7.3484692283495345, 4.58257569495584, 6.6332495807108, 7.810249675906654, 3.605551275463989, 3.872983346207417, 6.708203932499369, 5, 8, 5.656854249492381]
// 0: 5.744562646538029
// 1: 3.4641016151377544
// 2: 4.47213595499958
// 3: 4
// 4: 2.23606797749979
// 5: 7.3484692283495345
// 6: 4.58257569495584
// 7: 6.6332495807108
// 8: 7.810249675906654
// 9: 3.605551275463989
// 10: 3.872983346207417
// 11: 6.708203932499369
// 12: 5
// 13: 8
// 14: 5.656854249492381

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);
// [66, 24, 40, 32, 10, 108, 42, 88, 122, 26, 30, 90, 50, 128, 64]

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log(ageMap);
// [11.489125293076057, 6.928203230275509, 8.94427190999916, 8, 4.47213595499958, 14.696938456699069, 9.16515138991168, 13.2664991614216, 15.620499351813308, 7.211102550927978, 7.745966692414834, 13.416407864998739, 10, 16, 11.313708498984761]
// 0: 11.489125293076057
// 1: 6.928203230275509
// 2: 8.94427190999916
// 3: 8
// 4: 4.47213595499958
// 5: 14.696938456699069
// 6: 9.16515138991168
// 7: 13.2664991614216
// 8: 15.620499351813308
// 9: 7.211102550927978
// 10: 7.745966692414834
// 11: 13.416407864998739
// 12: 10
// 13: 16
// 14: 11.313708498984761