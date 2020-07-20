//largestSubarraySum Func

// 1) returns the largest subarray sum for an array of all-positive integers
// 2) returns the largest subarray sum when the array has some negative numbers at the end
// 3) returns the largest subarray sum when the array has some negative numbers at the start
// 4) returns the largest subarray sum when there are negatives at the beginning and end of the array
// 5) returns the largest subarray sum where the subarray has negatives inside it
// 6) returns largest subarray sum with two negatives in between
// 7) returns largest subarray sum when the sum does not go to zero from left to right
// 8) returns the largest subarray sum when all the items are negative
// 9) runs within the time limit - in O(n) time, instead of O(n^2) time

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]


function largestSubarraySum(array) {
    let currentSum = 0;
    let maxSum = 0;

    for (let i = 0; i < array.length; i++) { 

        currentSum = currentSum + array[i];   

        if (currentSum < 0) {
            currentSum = 0;
        }
        if (maxSum < currentSum) {
            maxSum = currentSum
        }
    } 
    return maxSum
}

// largestSubarraySum(array)