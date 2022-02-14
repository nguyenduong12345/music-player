// 1.string in javascript;
// console.log(newValue);
// var newValue = 200;
// const name = "Dngdev";
// const major = "UI UX designer!";
// console.log(name);
// console.log(typeof name);
// const newString = "My name is " + name + " and i'm a " + major;
// console.log(newString);
// const newStr2 = `My name is ${name} and i'm a ${major}`;
// const lengthOfStr = "my name is Duong Nguyen";
// console.log(newStr2);
// console.log(lengthOfStr.length);
// const demoStr = "Frontend Developer    ";
// console.log(demoStr.split(""));
// console.log(demoStr.split(" "));
// console.log(demoStr.toUpperCase(""));
// console.log(demoStr.includes("Frontend"));
// console.log(demoStr.startsWith("Fr"));
// console.log(demoStr.lastIndexOf("e"));
// console.log(demoStr.indexOf("e"));
// console.log(demoStr.replace("Frontend", "UiUx"));
// console.log(demoStr.slice(0, 8));
// console.log(demoStr.slice(0, 8));
// console.log(demoStr.slice(-9));
// console.log(demoStr.trimStart());
// console.log(demoStr.charAt(2));
// console.log(demoStr.substring(1, 5));
// console.log(
//   demoStr
//     .trim()
//     .replace("Developer", "Developer and Designer Is me")
//     .toUpperCase()
// );
// 2.Number in javasscript;
// const number1 = "5";
// const number2 = "5.3";
// console.log(parseInt(number2));
// console.log(parseFloat(number2));
// const number3 = "-100";
// console.log(Math.abs(number3));
// console.log(Math.round(number2));
// console.log(parseFloat((1 / 3).toFixed(2)));
// console.log(Math.ceil(Math.random() * 10));
// console.log(`Max: ${Math.max(3, 4, 7)}`);
// console.log(Math.pow(10, 10));
// console.log(isNaN("this is a string"));
// console.log(isNaN("474958495"));
// console.log(Number.isNaN(NaN));
// console.log(Number("4.5"));
// console.log(Number("asjdhf"));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(false));
// console.log(Number(true));
// console.log(String("this is me"));
// console.log(`Boolean of : ${Boolean(0)}`);
// console.log(`Boolean of : ${Boolean("")}`);
// console.log(`Boolean of : ${Boolean(undefined)}`);
// console.log(`Boolean of : ${Boolean(false)}`);
// console.log(`Boolean of : ${Boolean("Me")}`);
// /////
// console.log(1 + 1); //=2
// console.log(10 + "10"); //=1010
// console.log("10" + 10); //=1010
// console.log(null + " "); //"null"
// console.log(null + undefined); //NaN
// console.log("" - 1); //-1
// console.log(false - true); //-1
// console.log(null + 10); //10
// console.log(10 > 5 && 5 > 7); //false
// console.log(5 > 7 || 5 > 4); // true
// let opposite = true;
// console.log(!opposite);
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false
// console.log(10 == "10"); //true
// console.log(true == 1); //true
// console.log(1 == "01"); //true
// console.log(null == ""); //false
// console.log(10 === "10"); //false
// console.log(10 !== "10"); //true
// console.log("true" === true); //false
//
//
///
/////
// const imRich = true;
// const myMoney = 10;
// if (!imRich) {
//   console.log("I will buy a brand new car");
// } else if (myMoney > 100000) {
//   console.log("I will help poor people");
// } else {
//   console.log("I will save money");
// }
//ham alert
// alert("Your website has been hacked");
//ham prompt
// const yourName = prompt("Write your full name here!", " ");
// console.log(yourName);
//ham confirm
// const confirmYourAges = confirm("Are you 18 years old ?");
// console.log(confirmYourAges);

//Bai tap thuc hanh 1
// const yourAges = prompt("Please! Enter your age here", " ");
// console.log(typeof yourAges);
// let messege = "";
// if (Number(yourAges) >= 18 && Number(yourAges) < 100) {
//   messege = "You can come in!";
// } else if (Number(yourAges) >= 100) {
//   messege = "Sorry you are too old!";
// } else {
//   messege = "Sorry you can't come in!";
// }
// alert(messege);

//Bai tap thuc hanh 2
// const a = 20;
// const b = 20;
// if (a > b) {
//   alert(`So lon hon la ${a}`);
// } else if (a < b) {
//   alert(`So lon hon la ${b}`);
// } else {
//   alert("Hai so bang nhau");
// }
// const fruit = "";
// const number = "4000";
// switch (Number(number)) {
//   case 5000000:
//     console.log("You can buy this car");
//     break;
//   case 4000:
//     console.log("You need more money");
//     break;
//   default:
//     console.log("Do you want to buy this car?");
//     break;
// }
// const demoNumber = 4000;
// let demoMessege =
//   demoNumber > 4000
//     ? "You can buy this device"
//     : demoNumber < 4000
//     ? "You don't have enough money"
//     : "You can save more money";

// console.log(sum(1000.3, 300));

// function sum(a = 0, b = 0) {
//   total = a + b;

//   return total;
// }
//1.practices function declaration
//Average
function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
const sum2 = add;
sum2(300, 300);

function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 400, sum2);
console.log(`result ${Number(result)}`);

//Rectangular area
function prSum(a, b) {
  console.log(a + b);
  return a + b;
}
const Add = prSum;
prSum(200, 600);

function rectangularArea(a, b, ar) {
  const area = ar(a, b);
  return area * 2;
}
const demoArea = rectangularArea(500, 300, Add);
console.log(`Measure of rectangular area is ${demoArea}`);
//2.practices anonymous function
const logName = function () {
  console.log("Hello World");
};
logName();
//3.IIEF(immediately invoked function execution )
(function () {
  console.log("Hello you guys !!");
})();
//.Global scope && Function scope(bien toan cuc va bien cuc bo)
let myName = "Duong Nguyen";
function thisIsMyName() {
  let MyName2 = myName;
  console.log(MyName2);
}
thisIsMyName();
//block scope
//w1
let messege;
if (2 > 1) {
  messege = "Hello World";
}
alert(messege);
//w2
if (2 > 1) {
  let messege = "Hello World!!!!!!";
  alert(messege);
}
//Lexical scope
let newName = "Duong Nguyen";
function inTro() {
  let messege2 = "Hello I'm";
  console.log = `(${messege2} ${newName})`;
}
inTro();
//Closure
