

exports.isValidMasterCardNumber = (input) => {
    if(!input)
        return false;

    input = input.trim();

    // apply regex to strip all non digit characters.

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