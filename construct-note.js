//Write a function called constructNote, which accepts two strings, a message and some letters. 
//The function should return true if the message can be built with the letters that you are given; 
//otherwise, it should return false.

function constructNote(msg, letters) {
    const msgFreq = {};
    const lettersFreq = {};

    //frequency counter of the message
    for (let char of msg) {
        msgFreq[char] = ++msgFreq[char] || 1;
    }
    // frequency counter of the letters
    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }
    //compare the msg with the letters
    for (let char in msgFreq) {
        if (!lettersFreq[char]) return false;
        if (msgFreq[char] > lettersFreq[char]) return false;
    }
    return true;
}
