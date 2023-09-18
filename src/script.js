function fibonacci(num)
{
  var arr = [0, 1];

  for (let i = 2; i < num; i++) {
    arr.push(arr[i-1] + arr[i-2]);
  }

  console.log(arr);

}

fibonacci(5)