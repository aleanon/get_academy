function fixText(text) {
    let trimmed = text.trim();
    if (isLetter(trimmed[0])) {
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
    }
    return trimmed;
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}