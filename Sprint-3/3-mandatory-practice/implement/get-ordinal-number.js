function getOrdinalNumber(num) {
  const lastNumber = num.toString().slice(-1);
  const lastTwoNumber = num.toString().slice(-2);
  if (
    lastTwoNumber === "11" ||
    lastTwoNumber === "12" ||
    lastTwoNumber === "13"
  ) {
    return `${num}th`;
  } else if (lastNumber === "1") {
    return `${num}st`;
  } else if (lastNumber === "2") {
    return `${num}nd`;
  } else if (lastNumber === "3") {
    return `${num}rd`;
  } else return `${num}th`;
}

module.exports = getOrdinalNumber;
