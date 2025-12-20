function isProperFraction(numerator, denominator) {
    if ((numerator / denominator) < 1 && (numerator / denominator) > -1 && denominator !== 0) return true;
    else return false;
}
    // add your completed function from key-implement here

module.exports = isProperFraction;