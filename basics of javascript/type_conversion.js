//String conversion

let someValue =true;
console.log(typeof someValue); //boolean

let someValueBeString = String(someValue)

console.log(someValueBeString) //"true"
console.log(typeof someValueBeString)//string

let someValueNull =null;
console.log(typeof someValueNull); //object

let someValueNullBeString = String(someValueNull)

console.log(someValueNullBeString) //"null"
console.log(typeof someValueNullBeString)//string



//Number conversion

let someValueStr = "3"
console.log(typeof someValueStr); //string

let someValueBeNumber = Number(someValueStr)
console.log(typeof someValueBeNumber); //number
console.log(someValueBeNumber); //3


