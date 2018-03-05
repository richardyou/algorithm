function swap(arr, a, b) {
  if (arr[a] && arr[b]) {
    arr[a] = arr.splice(b, 1, arr[a])[0];
  }
}

const arr = [72, 1, 68, 95, 75, 54, 58, 10, 35, 6];

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let isSwap = false;
    for (let k = 0; k < len - 1 - i; k++) {
      if (arr[k] > arr[k + 1]) {
        isSwap = true;
        swap(arr, k, k + 1);
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

// bubbleSort(arr)

function twoWayBubbleSort(arr) {
  let tail = arr.length - 1;
  for (let i = 0; i < tail; tail--) {
    //find the smallest
    for (let k = i; k < tail; k++) {
      if (arr[k - 1] > arr[k]) {
        swap(arr, k, k - 1);
      }
    }
    i++;
    //find the largest
    for (let k = tail; k > i; k--) {
      if (arr[k - 1] > arr[k]) {
        swap(arr, k - 1, k);
      }
    }
  }
  return arr;
}
// twoWayBubbleSort(arr);

function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = arr[i];
    let minIndex = i;
    let isSwap = false;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
        isSwap = true;
      }
    }
    if (!isSwap) break;
    swap(arr, i, minIndex);
  }
  return arr;
}

// selectSort(arr)

// 1. 假设arr[0]已排序
//2. 外循环 i 缓存i为temp  将游标k初始值设为i
//3. 将temp在已排序的数组内 从后往前比较 大于temp且k>0 游标前移, 否则将temp赋值给游标所在元素

function directInsertSort(arr, gap) {
  gap = gap || 1;
  let len = arr.length;
  let temp;
  for (let i = gap; i < len; i++) {
    let temp = arr[i];
    let j = i - gap;
    while (j >= 0 && arr[j] > temp) {
      arr[j + gap] = arr[j];
      j -= gap;
    }
    //将当前元素放上
    arr[j + gap] = temp;
  }
  return arr;
}

// directInsertSort(arr);

function shallSort(arr) {
  let len = arr.length;
  let gap = len >> 1;
  while (gap > 0) {
    directInsertSort(arr, gap);
    gap = gap >> 1;
  }
  return arr;
}

// shallSort(arr);

function quickSort(arr) {
  if (arr.length === 0) return [];
  let left = [];
  let right = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
quickSort(arr);
console.log(quickSort(arr));