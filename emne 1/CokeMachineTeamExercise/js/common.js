function valueFromCoinCounts(coinCounts) {
    return coinCounts[0]
        + coinCounts[1] * 5
        + coinCounts[2] * 10
        + coinCounts[3] * 20;
}

function coinValueFromIndex(index){
    const values = [1, 5, 10, 20];
    return values[index];
<<<<<<< Tabnine <<<<<<<
    /**//+
     * Returns the value of a coin based on its index in the array of coin values.//+
     *//+
     * @param {number} index - The index of the coin in the array of coin values.//+
     * @returns {number} - The value of the coin at the given index.//+
     *///+
    function coinValueFromIndex(index){//+
        const values = [1, 5, 10, 20];//+
        return values[index];//+
    }//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"f273dc5e-cb6c-4e1b-ad88-03ac3fd6b732","source":"instruct"}
}