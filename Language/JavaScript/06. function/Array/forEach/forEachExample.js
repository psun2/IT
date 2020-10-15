// 출처 : https://www.youtube.com/watch?v=rRgD1yVwIvE
// title : forEach

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


// No forEach   
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
// Object {name: "Company One", category: "Fianace", start: 1981, end: 2003}
// Object {name: "Company Two", category: "Retail", start: 1922, end: 2008}
// Object {name: "Company Three", category: "Auto", start: 1999, end: 2007}
// Object {name: "Company Four", category: "Retail", start: 1989, end: 2010}
// Object {name: "Company Five", category: "Technology", start: 2009, end: 2014}
// Object {name: "Company Six", category: "Fianace", start: 1987, end: 2010}
// Object {name: "Company Seven", category: "Auto", start: 1986, end: 1996}
// Object {name: "Company Eight", category: "Technology", start: 2011, end: 2016}
// Object {name: "Company Nine", category: "Retail", start: 1981, end: 1989}

// # forEach
companies.forEach(function(company) {
    console.log(company);
});
// Object {name: "Company One", category: "Fianace", start: 1981, end: 2003}
// Object {name: "Company Two", category: "Retail", start: 1922, end: 2008}
// Object {name: "Company Three", category: "Auto", start: 1999, end: 2007}
// Object {name: "Company Four", category: "Retail", start: 1989, end: 2010}
// Object {name: "Company Five", category: "Technology", start: 2009, end: 2014}
// Object {name: "Company Six", category: "Fianace", start: 1987, end: 2010}
// Object {name: "Company Seven", category: "Auto", start: 1986, end: 1996}
// Object {name: "Company Eight", category: "Technology", start: 2011, end: 2016}
// Object {name: "Company Nine", category: "Retail", start: 1981, end: 1989}

// # forEach
companies.forEach(function(company) {
    console.log(company.name);
});
// Company One 
// Company Two 
// Company Three 
// Company Four 
// Company Five 
// Company Six 
// Company Seven 
// Company Eight 
// Company Nine 