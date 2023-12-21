// DP를 적용시키는것도 생각해보자.

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

  console.log(firstNum, secondNum);
}

inputArray = [1, 3, 5, 7, 9];
solve(inputArray);
