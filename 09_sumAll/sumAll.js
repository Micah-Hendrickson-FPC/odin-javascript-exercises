const sumAll = function(start, end) {
    let result = 0;
    if (Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end >= 0) {
        //Ensure the values are arranged in order
        if (end < start) {
            let temp = start;
            start = end;
            end = temp;
        }
        for (let i = start; i <= end; i++) {
            result += i;
        }
    } else {
        result = "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
