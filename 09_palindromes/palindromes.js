const palindromes = function (str) {
    let newStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let strArray = newStr.split("");
    let reverseArray = strArray.reverse();
    let reverseStr = reverseArray.join("");
    if(newStr === reverseStr) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
