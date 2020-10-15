console.log('decode');
console.log(`결과물 :
    https://www.naver.com/search?=${encodeURIComponent('박성언')}`);

console.log();

console.log('encode');
console.log(
  decodeURIComponent(`결과물 :
    https://www.naver.com/search?=${encodeURIComponent('박성언')}`),
);
