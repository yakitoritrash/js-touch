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

function factorial(x) {
  if (x == 1) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}

const output = factorial(5);
console.log(output);
