//Write a function called separatePositive which accepts an array of non-zero integers. 
//Separate the positive integers to the left and the negative integers to the right. 
//The positive numbers and negative numbers do not need to be in sorted order. 
//The problem should be done in place (in other words, do not build a copy of the input array).

function separatePositive(numsArr) {
    let start = 0;
    let end = numsArr.length - 1;

    while (start < end) {
        if (numsArr[start] < 0 && numsArr[end] > 0) {
            const temp = numsArr[start];
            numsArr[start] = numsArr[end];
            numsArr[end] = temp;
            start++;
            end--;
        } else {
            if (numsArr[start] > 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return numsArr;
}