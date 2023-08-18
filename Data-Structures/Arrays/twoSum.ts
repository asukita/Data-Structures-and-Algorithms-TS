// (workaround) adding findLastIndex functionality for typescript
export { }

declare global {
    interface Array<T> {
        findLastIndex(
            predicate: (value: T, index: number, obj: T[]) => unknown,
            thisArg?: any
        ): number
    }
}
/**
 *Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]

  Constraints:
  2 <= nums.length <= 10^4
  -10^9 <= nums[i] <= 10^9
  -10^9 <= target <= 10^9
  Only one valid answer exists.

 Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 *
 * @param {Array<number>} nums
 * @param {number} target
 * @return {*}  {number[]}
 */
function twoSum(nums: Array<number>, target: number): number[] {
    // set return array empty, so if nums is empty it will no problem
    const answerArray: Array<number> = [];
    // iterates nums array
    for (let index = 0; index < nums.length; index++) {
        // get the difference between current number and target
        let result = target - nums[index];
        // find that number in the array with findIndex function
        let lastIndex = nums.findIndex((item) => result === item);
        // if finds something (not -1) and the index is diff, we add both to the return array
        if (lastIndex !== -1 && lastIndex !== index) {
            answerArray.push(index, lastIndex);
        }
        // just brek if we get to the return array size hehe :P (it can be better)
        if (answerArray.length === 2) {
            break;
        }
    }

    return answerArray;

}
/**
 *
 *
 * @param {Array<number>} nums
 * @param {number} target
 * @return {*}  {number[]}
 */
function twoSum2(nums: Array<number>, target: number): number[] {
    // same approach, but find from the last, so it doesn't iterates twice the last array
    // also using while so we don't loop more than necessary
    const answerArray: Array<number> = [];
    let conta = 0;

    while (answerArray.length < 2 && conta < nums.length) {
        let result = target - nums[conta];
        let lastIndex = nums.findLastIndex((item) => result === item);
        if (lastIndex !== -1 && lastIndex !== conta) {
            answerArray.push(conta, lastIndex);
        }
        conta++;
    }

    return answerArray;
}

/**
 * Better/cleaner solution with Map
 *
 * @param {Array<number>} nums
 * @param {number} target
 * @return {*}  {number[]}
 */
function twoSum3(nums: Array<number>, target: number): number[] {
    // creating new Map
    const myMap = new Map();
    // looping nums array
    for (let i = 0; i < nums.length; i++) {
        // get the difference between current number and target
        let result = target - nums[i];
        // check if Map has previous number
        if (myMap.has(result)) {
            // if true, return the previous and the current index
            return [myMap.get(result), i];
        }
        // setting the number as value: index so we can search for the value
        myMap.set(nums[i], i);
    }
    // if the array is empty, just return and empty array also
    return [];
}
/**
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {*}  {number[]}
 */
function twoSum4(nums: number[], target: number): number[] {
    // take 2 indexes to the array. A back index and a front index and the step increment
    let front = 1, step = 1;
    // start back at 0 and front at step and iterate to the next index pair
    for (let back = 0; ;) {
        // console.log({ 'front': nums[front] }, { 'step': step }, { 'back': nums[back] });
        // if the sum of back and front is the target, we are done
        if (nums[back] + nums[front] === target) {
            // we return the indexes
            return [back, front];
        }
        // If back is at 0 and front is at the end of the array, that means that we've covered the entire array
        if (back === 0 && front >= nums.length - 1) {
            // we can now break the loop
            break;
        }
        // if front reaches the end of the array
        if (front === nums.length - 1) {
            // reset back to 0 set front & step = step + 1
            back = 0;
            front = ++step;
            continue;
        }
        // increments both for the next pair
        back++;
        front++;
    }
    // if empty return and array
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));

console.log(twoSum3([11, 15, 7, 2], 9));
console.log(twoSum3([3, 2, 4], 6));
console.log(twoSum3([3, 3], 6));

console.log(twoSum4([11, 15, 7, 2], 9));
console.log(twoSum4([3, 2, 4], 6));
console.log(twoSum4([3, 3], 6));