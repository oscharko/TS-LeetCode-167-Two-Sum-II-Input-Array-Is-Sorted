let numbers = [2, 7, 11, 15], target = 9;
function twoSum(numbers2, target2) {
  let left = 0, right = numbers2.length - 1;
  while (left < right) {
    if (numbers2[left] + numbers2[right] === target2) {
      return [left + 1, right + 1];
    } else if (numbers2[left] + numbers2[right] < target2) {
      left++;
    } else {
      right--;
    }
  }
  return numbers2;
}
console.log(twoSum(numbers, target));
//# sourceMappingURL=index.js.map
