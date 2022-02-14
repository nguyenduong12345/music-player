function compare(a = 0, b = 0) {
  if (typeof a !== Number || typeof b !== Number) {
    console.log("Please enter a ");
  }
  return Math.max(a, b);
}
console.log(compare(2000));
