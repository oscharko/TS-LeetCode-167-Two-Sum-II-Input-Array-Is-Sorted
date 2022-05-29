let numbers = [2, 7, 11, 15], target = 9;
function twoSumFirstSolution(numbers2, target2) {
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
console.log(twoSumFirstSolution(numbers, target));
function twoSumFinalSolution(numbers2, target2) {
  let v = [0, numbers2.length - 1, target2, numbers2];
  while (v[0] < v[1]) {
    if (v[3][v[0]] + v[3][v[1]] === v[2])
      return [v[0] + 1, v[1] + 1];
    else if (v[3][v[0]] + v[3][v[1]] < v[2])
      v[0]++;
    else
      v[1]--;
  }
}
console.log(twoSumFinalSolution(numbers, target));
//# sourceMappingURL=index.js.map
