//EX1
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter a real number !");
    return;
  }
  return Math.max(a, b);
}
console.log(compare("abc"));
function compare2(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== number)
    return console.log("Please enter a Number !");
  if (a > b) {
    console.log("a is bigger than b");
  } else {
    console.log("b is bigger than a ");
  }
}
console.log(compare2(1200, 3500));
//EX2
function capitalize(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
console.log(capitalize((word = "TUAN")));
//Ex3
function compared(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  return Math.max(a, b);
}
function useCallBack(a, b, callback) {
  let max = compared(a, b);
  callback(max);
}
console.log(useCallBack(10, 3400, printCallBack));
function printCallBack(number) {
  console.log("Max number is " + Number(number));
}
