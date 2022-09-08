/**
 * Given an array of integers, and a number, 
 * find the number of pairs of integers in the array 
 * whose sum is equal to the second parameter. 
 * You can assume that there will be no duplicate values in the array.
 */

function countPairs(intArr, num) {
    //turn the array into a set
    let set = new Set(intArr);
    let count = 0;

    for (let val of intArr) {
        set.delete(val);
        if (set.has(num - val)) {
            count++;
        }
    }
    return count;
}
