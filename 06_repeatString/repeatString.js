const repeatString = function(string, loops) {
    let longString;
    for (let i = 0; i < loops; i++) {
        longString += string;
    }
    return longString;
};

// Do not edit below this line
module.exports = repeatString;
