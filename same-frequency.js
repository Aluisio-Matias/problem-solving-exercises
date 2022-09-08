//Write a function called sameFrequency. 
//Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(nums1, nums2) {

    //convert numbers to string
    let str1 = nums1.toString();
    let str2 = nums2.toString();

    //if the length of the numbers are not the same, return false
    if (str1.length !== str2.length) return false;

    //create 2 objs to check the frequency of the numbers
    let count1 = {};
    let count2 = {};

    //iterate through str1(nums1) and keep count
    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    }

    //iterate through str2(nums2) and keep count
    for (let j = 0; j < str2.length; j++) {
        count2[str2[j]] = (count2[str2[j]] || 0) + 1;
    }

    //compare the two numbers.
    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }
    return true;
}
