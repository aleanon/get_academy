const pattern = RegExp(/^[^\.@]*\.[^@\.]*@[^\.@]*\.[^\.@]*$/);
function isEmailAddress(address) {
    return pattern.test(address)
}