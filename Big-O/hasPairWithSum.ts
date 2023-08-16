// Naive
function hasPairWithSum(arr: Array<number>, sum: number) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum)
        return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr: Array<number>, sum: number) {
  const mySet = new Set();
  const len = arr.length;
  console.log('length ===> ', len);
  for (let i = 0; i < len; i++) {
    console.log('Set ===> ', mySet);
    console.log('arr[i] ===> ', arr[i]);
    if (mySet.has(arr[i])) {
      return true;
    }
    console.log('sum - arr[i] ===> ', sum - arr[i]);
    mySet.add(sum - arr[i]);
  }
  console.log('Set ===> ', mySet);
  return false;
}

 console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
