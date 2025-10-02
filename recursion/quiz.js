function sumRange (num) {
  if (num == 1) {
    return 1
  } else {
    return num + sumRange(num - 1);
  }
}

const output = sumRange(15);
console.log(output);
