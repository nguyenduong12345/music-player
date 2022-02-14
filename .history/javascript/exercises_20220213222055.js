function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter a real number !");
    return;
  }
  return Math.max(a, b);
}
console.log(compare("abc"));
function capitalize(word = "") {
  let newword = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return;
}
