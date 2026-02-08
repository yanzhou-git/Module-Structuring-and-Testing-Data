const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return number for number cards from 2 to 10", () => {
    const normalNumber = getCardValue("5♠");
    expect(normalNumber).toEqual(5);
    });
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for JQK", () => {
    const tenNumber = getCardValue("Q♠");
    expect(tenNumber).toEqual(10);
    });
// Case 4: Handle Ace (A):
test("should return 11 for Ace cards", () => {
    const aceofSpades2 = getCardValue("A❤");
    expect(aceofSpades2).toEqual(11);
    });
// Case 5: Handle Invalid Cards:
 try {
  getCardValue("^&");
  fail("Should have thrown an error"); 
} catch (error) {
  expect(error.message).toEqual("Invalid card rank.");
}


