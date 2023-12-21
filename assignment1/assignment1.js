function solve(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });

  firstNum = arr[0];
  secondNum = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (i % 2) firstNum = firstNum * 10 + arr[i];
    else secondNum = secondNum * 10 + arr[i];
  }

  console.log("곱이 가장 큰 조합 : ", firstNum, secondNum);
}

inputArray = [1, 3, 5, 7, 9];
solve(inputArray);
