function hasContiguousSubarray(arr, target) {
  let sum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];

    // If sum exceeds target, remove elements from the start until sum <= target
    while (sum > target && start <= i) {
      sum -= arr[start];
      start += 1;
    }

    // If sum equals target, return true
    if (sum === target) {
      return true;
    }
  }

  // If no subarray found, return false
  return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarray(arr, target)); // Output: true
