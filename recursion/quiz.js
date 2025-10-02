function sumRange (num) {
  if (num == 1) {
    return 1
  } else {
    return num + sumRange(num - 1);
  }
}


function power(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * power(x, n - 1);
  }
}

const output = power(16, 2);
console.log(output);
