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

const allAreLessThanSeven = all([1, 2, 9], function(num) {
  return num < 7;
});

function all(arr, callback)  {
  var copy = copy || arr.slice();
  if (copy.length === 0) return true;
  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

function productOfarray (arr) {
  if (arr.length === 0) return true;
  return (arr.shift() * productOfarray(arr))
}

function contains() {

}

const output = productOfarray([1, 2, 3, 4, 5]);
console.log(output);
