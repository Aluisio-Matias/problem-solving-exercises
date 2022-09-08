/**
 * Write a function called longestFall, which accepts an array of integers, 
 * and returns the length of the longest consecutive decrease of integers.
 */

function longestFall(numsArr) {
    let tempCounter = 1;
    let maxCounter = 0;

    //if array is empty return 0;
    if (numsArr.length === 0) return 0;

    for (i = 1; i < numsArr.length; i++) {
        //if current num is smaller thatn the previous num, add to tempCounter and maxCounter
        if (numsArr[i] < numsArr[i - 1]) {
            tempCounter++;
            maxCounter = Math.max(tempCounter, maxCounter);
        } else {
            tempCounter = 1;
        }
    }
    //1 is the default val for an empty array.
    return maxCounter || 1;
}
