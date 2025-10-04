function fibonacci(num) {
  let arr = [];
  if (num === 0) {
    arr.push(0);
  } else if (num === 1) {
    arr.push(1);
  } else {
    arr.push(fibonacci(num - 1) + fibonacci(num - 2));
  }
  return arr
}

const output = fibonacci(3)
console.log(output);
