function power(x, y) {
  if (y === 1) {
    return x;
  } else {
    return x * power(x, y - 1);
  }
}

const z = power(2, 8);
console.log(z);
