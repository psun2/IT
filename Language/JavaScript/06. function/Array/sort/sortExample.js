// 출처 : https://www.youtube.com/watch?v=rRgD1yVwIvE
// title : sort

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

// Sort companies by start year

const sortedCompanies = companies.sort(function(company1, company2) {
    if(company1.start > company2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);
// [Object, Object, Object, Object, Object, Object, Object, Object, Object]
// 0: Object
// name: "Company Two"
// category: "Retail"
// start: 1922
// end: 2008
// 1: Object
// name: "Company Nine"
// category: "Retail"
// start: 1981
// end: 1989
// 2: Object
// name: "Company One"
// category: "Fianace"
// start: 1981
// end: 2003
// 3: Object
// name: "Company Seven"
// category: "Auto"
// start: 1986
// end: 1996
// 4: Object
// name: "Company Six"
// category: "Fianace"
// start: 1987
// end: 2010
// 5: Object
// name: "Company Four"
// category: "Retail"
// start: 1989
// end: 2010
// 6: Object
// name: "Company Three"
// category: "Auto"
// start: 1999
// end: 2007
// 7: Object
// name: "Company Five"
// category: "Technology"
// start: 2009
// end: 2014
// 8: Object
// name: "Company Eight"
// category: "Technology"
// start: 2011
// end: 2016

const sortCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sortCompanies);
// [Object, Object, Object, Object, Object, Object, Object, Object, Object]
// 0: Object
// name: "Company Two"
// category: "Retail"
// start: 1922
// end: 2008
// 1: Object
// name: "Company Nine"
// category: "Retail"
// start: 1981
// end: 1989
// 2: Object
// name: "Company One"
// category: "Fianace"
// start: 1981
// end: 2003
// 3: Object
// name: "Company Seven"
// category: "Auto"
// start: 1986
// end: 1996
// 4: Object
// name: "Company Six"
// category: "Fianace"
// start: 1987
// end: 2010
// 5: Object
// name: "Company Four"
// category: "Retail"
// start: 1989
// end: 2010
// 6: Object
// name: "Company Three"
// category: "Auto"
// start: 1999
// end: 2007
// 7: Object
// name: "Company Five"
// category: "Technology"
// start: 2009
// end: 2014
// 8: Object
// name: "Company Eight"
// category: "Technology"
// start: 2011
// end: 2016

// sort ages
const sortAges = ages.sort();
console.log(sortAges); 
// [12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 5, 54, 61, 64]

const sortMap = ages.sort((a, b) => a - b)
console.log(sortMap);
// [5, 12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 54, 61, 64]