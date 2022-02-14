//EX1
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter a real number !");
    return;
  }
  return Math.max(a, b);
}
console.log(compare("abc"));
//EX2
function capitalize(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
console.log(capitalize((word = "NGUYEN HOANG DUONG")));
