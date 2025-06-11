const repeatString = function(string, loops) {
    let result
    if (loops < 0) {
        result = "ERROR"
    } else {
        let longString = "";
        for (let i = 0; i < loops; i++) {
            longString += string;
        }
        result = longString
    }  
    return result;
};

// Do not edit below this line
module.exports = repeatString;
