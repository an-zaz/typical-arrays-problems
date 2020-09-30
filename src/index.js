
exports.min = function min (array) {
    if (!array || !array.length){
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max (array) {
    if (!array || !array.length){
        return 0;
    }
    return Math.max(...array);
};

exports.avg = function avg (array) {
    if (!array || !array.length){
        return 0;
    }
    let sum = array.reduce((acc, item) => acc + item);
    return sum / array.length;
};
