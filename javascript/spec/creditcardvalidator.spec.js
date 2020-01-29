const CreditCardValidator = require("../CreditCardValidator");

// Remember, you're tackling this in segments:
// (Length) && ((Range2) || (Range2))
describe("credit card validator", function() {
    // Start by validating the first part of your conditional (length), while satisfying
    // the rest of the conditions. 
    //
    // Make sure you utilze value boundary analysis when checking against numbers in the 
    // condition that you're testing.
    // (input.length == 16 || input.length == 19)
    // 
    // --> 15 |16| 17 
    // --> 18 |19| 20

    // validating input.length == 16 check
    it("when the card number is 15 digits and a valid starting number", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("533456789124515");
        expect(isValid).toBe(false, "15 digits is not a valid length for master card");
    });

    it("when the card number is 16 digits and a valid starting number", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5334567891245156");
        expect(isValid).toBe(true, "16 digits, is the correct length, this should have passed");
    });

    it("when the card number is 17 digits and a valid starting number", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("53345678912451566");
        expect(isValid).toBe(false, "17 digits is not a valid length for master card");
    });

    // validating input.length == 19 check
    it("when the card number is 18 digits and a valid starting number", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("53234323212323456");
        expect(isValid).toBe(false, "18 digits is not a valid length for master card");
    });

    it("when the card number is 19 digits and a valid starting number", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5323432321232345670");
        expect(isValid).toBe(true, "19 digits is a valid length for master card");
    });

    it("when the card number is 20 digits and a valid starting number", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("53234323212323456909");
        expect(isValid).toBe(false, "20 digits is not a valid length for master card");
    });

    // Now that the first part of your conditional is tested, you can move forward with only 
    // valid options. Now you will focus on testing the second part of your conditional (Range1) 
    //
    // (firstTwoDigits >= 51 && firstTwoDigits <= 55)
    // Again, this will require value boundary analysis
    it("when the card number length is valid and the starting number is 50", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5034567891245156");
        expect(isValid).toBe(false, "master card does not start with 50");
    });

    it("when the card number length is valid and the starting number is 51", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5134567891245156");
        expect(isValid).toBe(true, "master card starts with 50");
    });

    it("when the card number length is valid and the starting number is 52", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5234567891245156");
        expect(isValid).toBe(true, "master card should have a number greater than 51");
    });

    // Now you validate firstTwoDigits <= 55
    it("when the card number length is valid and the starting number is 54", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5434567891245156");
        expect(isValid).toBe(true, "master card does start with 54");
    });

    it("when the card number length is valid and the starting number is 55", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5534567891245156");
        expect(isValid).toBe(true, "master card does start with 55");
    });

    it("when the card number length is valid and the starting number is 56", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("5634567891245156");
        expect(isValid).toBe(false, "master card does not start with 56");
    });

    // ... Great job!

    // Let's do range validation for the last portion of the credit card, (Range 2).
    // 
    // Referencing our overall conditional, it was a logical or between Range1 and Range2.
    // Since this is for the same number, we won't have to also validate the logical or
    // as a seperate set of unit tests. Instead we'll test in a similar fashion as Range1 
    // from above.
    //
    // (firstSixDigits >= 222100 && firstSixDigits <= 272099)
    it("when the card number length is valid and the starting number is 222099", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("2220997891245156");
        expect(isValid).toBe(false, "master card does not start with 222099");
    });
    
    it("when the card number length is valid and the starting number is 222100", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("2221007891245156");
        expect(isValid).toBe(true, "master card does not start with 222100");
    });

    it("when the card number length is valid and the starting number is 222101", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("2221017891245156");
        expect(isValid).toBe(true, "master card does not start with 222101");
    });

    it("when the card number length is valid and the starting number is 272098", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("2720987891245156");
        expect(isValid).toBe(true, "master card starts with 272098");
    });

    it("when the card number length is valid and the starting number is 272099", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("2720997891245156");
        expect(isValid).toBe(true, "master card starts with 272099");
    });

    it("when the card number length is valid and the starting number is 272100", () => {
        var isValid = CreditCardValidator.isValidMasterCardNumber("2721007891245156");
        expect(isValid).toBe(false, "master card starts with 272100");
    });

    it("when the card number length is valid and the starting number is 272100", (myvale) => {
        var isValid = CreditCardValidator.isValidMasterCardNumber(myvale);
        expect(isValid).toBe(false, "master card starts with 272100");
    });
});