const findTheOldest = function(array) {
    let sortedArray = array.sort(function(a,b) {
        const currentYear = (new Date()).getFullYear();
        const aFinalYear = !('yearOfDeath' in a) ? currentYear : a.yearOfDeath;
        const bFinalYear = !('yearOfDeath' in b) ? currentYear : b.yearOfDeath;
        const lastPerson = aFinalYear - a.yearOfBirth;
        const nextPerson = bFinalYear - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
