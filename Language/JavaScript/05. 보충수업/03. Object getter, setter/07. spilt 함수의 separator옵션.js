// TODO: spilt 함수의 separator옵션

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);

    console.log('The original string is: "' + stringToSplit + '"');
    console.log('The separator is: "' + separator + '"');
    console.log("The array has " + arrayOfStrings.length +" elements: " + arrayOfStrings.join(" / "));
    console.log();
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var space = " ";
var comma = ",";

splitString(tempestString, space); // 스플릿 함수의 분리기호 옵션을 공백으로 줍니다.
splitString(tempestString); // 스플릿 함수의 분리기호 옵션을 주지 않습니다.
splitString(monthString, comma); // 스플릿 함수의 분리기호 옵션을 콤마로 줍니다.
