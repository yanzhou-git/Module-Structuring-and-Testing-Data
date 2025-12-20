function repeat(str,count) {
    if (count < 0) {
        throw new Error ("Invalid counts.");
    } else if (count === 0) {
        return "";
    }
    else return str.repeat(count);
}

module.exports = repeat;