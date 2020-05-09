var testArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
  ];
  
  const testMap = testArray.map((currentValue, index, array, thisArg) => {
    console.log(currentValue);
    console.log(index);
    console.log(array);
    console.log(thisArg);
  });
  
  // currentValue : Object {key: 1, value: 10}, Object {key: 2, value: 20}, Object {key: 3, value: 30}
  // index : 0, 1, 2
  // array
            // [Object, Object, Object]
            // 0: Object
            // key: 1
            // value: 10
            // 1: Object
            // key: 2
            // value: 20
            // 2: Object
            // key: 3
            // value: 30
  // thisArg : undefined, undefined, undefined
  