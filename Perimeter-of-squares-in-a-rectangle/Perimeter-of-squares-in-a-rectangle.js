const perimeter = (n) => {
  let arr = [1, 1];
  let result = 2;

  if (n < 2) return 4;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    result += arr[i];
  }

  return result * 4;
};