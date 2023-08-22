/**
 *Given an integer array nums, find the subarray  with the largest sum, and return its sum.
Example 1:
               -2,-1, -4, 4, 3 , 5, 6,  1, 5 
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 *
 *
 * @param {number[]} nums
 * @return {*}  {number}
 */
function maxSubArray(nums: number[]): number {
    let result = 0;
    let subtotal = 0;
    let currentNum = 0;
    const arrayResult: number[] = [];
    const arraySums: number[] = [];
    /*
    NAIVE APPROACH
    1. Loop the array
    2. sum subtotal += a[index] 
    4. else >= 0, if result > subtotal
    5. arrayindexes.push(i), result = sum loop arrayindex , next
    6. else next
    7. return result
    */

    for (let index = 0; index < nums.length; index++) {
        currentNum = nums[index];
        subtotal += currentNum;
        // console.log('subtotal', subtotal);
        arraySums.push(subtotal);
        if (subtotal >= 0) {
            arrayResult.push(currentNum);
            result = 0;
            for (let j = 0; j < arrayResult.length; j++) {
                result += arrayResult[j];
                // console.log('result', result);
            }
            subtotal = result;
        }
    }
    //console.log(arraySums);
    arraySums.sort((a, b) => b - a);
    return arraySums[0];
};

/**
 * Iterates entire array while changing current value with sums if greated than 0
 * then,return the first element of the DESC sorted array
 * @param {number[]} nums
 * @return {*}  {number}
 */
function maxSubArray2(nums: number[]): number {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= 0) {
            nums[i] += nums[i - 1]
        }
    }
    return nums.sort((a, b) => b - a)[0];
}

/**
 * Iterates entire array, sum between previews result + current value,
 * ignoring minus zero items
 * resulting with the largest sum
 *
 * @param {number[]} nums
 * @return {*}  {number}
 */
function maxSubArray3(nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + result >= 0) {
            result += nums[i];
        }
    }
    return result;
}

/**
 * Best? Kadane algorithm to solve maximum subarray problem
 * start with the first element, 1. compare between current, 
 * the sum between previews max + current
 * 2. get the max between previews largest number and current sum
 * at the end, the largestSum will be the greater value
 *
 * Reference: https://en.wikipedia.org/wiki/Maximum_subarray_problem
 */
function maxSubArrayKadane(nums: number[]): number {
    let [currentSum, largestSum] = [0, nums[0]];
    nums.forEach(n => {
        // console.log('Entries', n, currentSum + n, largestSum);
        currentSum = Math.max(n, currentSum + n);
        largestSum = Math.max(currentSum, largestSum);
        // console.log('Finishing', currentSum, largestSum);
    })
    return largestSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [1];
const nums3 = [5, 4, -1, 7, 8];

console.log(maxSubArray(nums));
console.log(maxSubArray(nums2));
console.log(maxSubArray(nums3));

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray2([1]));
console.log(maxSubArray2([5, 4, -1, 7, 8]));

console.log(maxSubArray3(nums));
console.log(maxSubArray3(nums2));
console.log(maxSubArray3(nums3));

console.log(maxSubArrayKadane(nums));
console.log(maxSubArrayKadane(nums2));
console.log(maxSubArrayKadane(nums3));