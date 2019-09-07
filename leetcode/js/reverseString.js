function reverseString(s) {
  const len = s.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    swap(s, i, len - i - 1);
  }
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

const arr = ["H","a","n","n","a","h"];
reverseString(arr);
console.info(arr);
