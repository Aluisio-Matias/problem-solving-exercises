//Write a function called averagePair. Given a sorted array of integers and a target average, 
//determine if there is a pair of values in the array where the average of the pair equals the target average. 
//There may be more than one pair that matches the average target.

function averagePair(intArr, targetAvg) {
    //set pointers to the array
    let left = 0;
    let right = intArr.length - 1;

    while (left < right) {
        let avg = (intArr[left] + intArr[right]) / 2;
        if (avg === targetAvg) {
            return true;
        } else if (avg < targetAvg) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}
