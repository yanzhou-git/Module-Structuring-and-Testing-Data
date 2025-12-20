   function getCardValue(card) {
    let rank = card.charAt(0);
    let twoNumber = card.slice(0,2);
    if (rank === "A") return 11;
    else if (rank < 10 && rank > 1) return Number(rank);
    else if (twoNumber === "10" ||  rank === "J" || rank === "Q" || rank === "K") return 10;
    else throw new Error ("Invalid card rank.");
}
module.exports = getCardValue;