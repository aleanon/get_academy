function isPalindrome(text){
    const cleanedText = cleanText(text);

    if (cleanedText === "") return false;

    const reversedText = reverseText(cleanedText);
    return cleanedText === reversedText;
}

function cleanText(text) {
    let cleanText = [];
    for (c of text) {
        let lowerCaseChar = c.toLowerCase()
        if (isLetter(lowerCaseChar)) {
            cleanText.push(lowerCaseChar);
        }
    }
    return cleanText.join('');
}

function reverseText(text) {
    return text.split('').reverse().join('');
}

function isLetter(lowerCaseChar) {
    return lowerCaseChar != lowerCaseChar.toUpperCase();
}
