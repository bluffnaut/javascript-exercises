const sumAll = function(min, max) {
// Error prevention:
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temporaryMin = min;
        min = max;
        max = temporaryMin;
    };

    // Incremental loop:
    let sum = 0;
    for (i = min; i <= max; i++) {
        sum += i;
    };
    return sum;
};

sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
