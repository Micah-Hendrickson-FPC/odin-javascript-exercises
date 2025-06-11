const removeFromArray = function(array, ...toRemove) {
    return array.filter(value => !(toRemove.includes(value)));
};

// Do not edit below this line
module.exports = removeFromArray;
