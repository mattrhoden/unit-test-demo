

exports.isValidMasterCardNumber = (input) => {
    input = input.trim();
    var firstTwoDigits = Number.parseInt(input.substring(0, 2));
    var firstSixDigits = Number.parseInt(input.substring(0, 6));

    return (
        (input.length == 16 || input.length == 19) && (
            (firstTwoDigits >= 51 && firstTwoDigits <= 55)
            ||
            (firstSixDigits >= 222100 && firstSixDigits <= 272099)
        )
    );
}