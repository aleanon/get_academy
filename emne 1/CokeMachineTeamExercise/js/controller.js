
function buyCoke() {
    let valueInserted = valueFromCoinCounts(coinsInserted);
    if (!inStockAndEnoughPayed(valueInserted)) return;
    
    errorMessage = "";

    takeInsertedCoins();

    if (valueInserted > price) returnChange(valueInserted - price);

    cokesInStore--;
    isCokeInDelivery = true;

    updateView();
}

function insertCoin(coinIndex) {
    coinsInserted[coinIndex]++;
    errorMessage = "";
    updateView();
}

function returnCoins() {
    coinsReturned = [...coinsInserted];
    coinsInserted = [0, 0, 0, 0];
    errorMessage = "";
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    errorMessage = "";
    updateView();
}

function takeCoke() {
    isCokeInDelivery = false;
    errorMessage = "";
    updateView();
}

function inStockAndEnoughPayed(valueOfCoinsInserted) {
    if (cokesInStore < 1) {
        errorMessage = "Ingen beholdning";
        updateView();
        return false;
    }

    if (valueOfCoinsInserted < price) {
        errorMessage = `Ikke nok penger, betalt ${valueOfCoinsInserted}, du trenger minst ${price}`;
        updateView();
        return false;
    }

    errorMessage = "";
    return true;
}

function returnChange(change) {
    for (let i = coinsInMachine.length -1; i >=0; i--) {
        let coinValue = coinValueFromIndex(i)
        while (coinsInMachine[i] > 0 && change - coinValue >= 0) {
                coinsReturned[i]++;
                coinsInMachine[i]--;
                change -= coinValue;
        }
        if (change == 0) break;
    }    
}

function takeInsertedCoins() {
    for (let i=0; i<coinsInserted.length; i++) {
        coinsInMachine[i] += coinsInserted[i];
        coinsInserted[i] = 0;
    }
}
