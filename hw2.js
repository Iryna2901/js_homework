function pow(x, y) {
  let result = 1;
  if (y < 0) {
    //
    for (let i = 0; i < -y; i++) {
      result *= x;
    }
    result = 1 / result;
  } else {
    for (let i = 0; i < y; i++) {
      result *= x;
    }
  }
  return result;
}
console.log(pow(8, 2));
console.log(pow(8, -2));
console.log(pow(8, 0));
console.log(pow(8, 1));
