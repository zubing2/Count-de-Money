// Initialize coin counts and values
let pennyCount = 0;
let nickelCount = 0;
let dimeCount = 0;
let quarterCount = 0;
let halfDollarCount = 0;
let dollarCount = 0;

// Function to update coin count and total value
function updateCoinCount(coinType, add) {
    if (add) {
        coinType++;
    } else {
        if (coinType > 0) {
            coinType--;
        }
    }
    return coinType;
}

// Function to update the display
function updateDisplay() {
    document.getElementById("pennyCount").textContent = pennyCount;
    document.getElementById("nickelCount").textContent = nickelCount;
    document.getElementById("dimeCount").textContent = dimeCount;
    document.getElementById("quarterCount").textContent = quarterCount;
    document.getElementById("halfDollarCount").textContent = halfDollarCount;
    document.getElementById("dollarCount").textContent = dollarCount;

    const pennyValue = (pennyCount * 0.01).toFixed(2);
    const nickelValue = (nickelCount * 0.05).toFixed(2);
    const dimeValue = (dimeCount * 0.10).toFixed(2);
    const quarterValue = (quarterCount * 0.25).toFixed(2);
    const halfDollarValue = (halfDollarCount * 0.50).toFixed(2);
    const dollarValue = (dollarCount * 1).toFixed(2);

    const totalValue = (
        pennyCount * 0.01 +
        nickelCount * 0.05 +
        dimeCount * 0.10 +
        quarterCount * 0.25 +
        halfDollarCount * 0.50 +
        dollarCount * 1
    ).toFixed(2);

    document.getElementById("pennyValue").textContent = `$${pennyValue}`;
    document.getElementById("nickelValue").textContent = `$${nickelValue}`;
    document.getElementById("dimeValue").textContent = `$${dimeValue}`;
    document.getElementById("quarterValue").textContent = `$${quarterValue}`;
    document.getElementById("halfDollarValue").textContent = `$${halfDollarValue}`;
    document.getElementById("dollarValue").textContent = `$${dollarValue}`;
    document.getElementById("totalValue").textContent = `$${totalValue}`;
}

// Add click event listeners to the buttons
document.getElementById("addPenny").addEventListener("click", function () {
    pennyCount = updateCoinCount(pennyCount, true);
    updateDisplay();
});
document.getElementById("subtractPenny").addEventListener("click", function () {
    pennyCount = updateCoinCount(pennyCount, false);
    updateDisplay();
});

document.getElementById("addNickel").addEventListener("click", function () {
    nickelCount = updateCoinCount(nickelCount, true);
    updateDisplay();
});
document.getElementById("subtractNickel").addEventListener("click", function () {
    nickelCount = updateCoinCount(nickelCount, false);
    updateDisplay();
});

document.getElementById("addDime").addEventListener("click", function () {
    dimeCount = updateCoinCount(dimeCount, true);
    updateDisplay();
});
document.getElementById("subtractDime").addEventListener("click", function () {
    dimeCount = updateCoinCount(dimeCount, false);
    updateDisplay();
});

document.getElementById("addQuarter").addEventListener("click", function () {
    quarterCount = updateCoinCount(quarterCount, true);
    updateDisplay();
});
document.getElementById("subtractQuarter").addEventListener("click", function () {
    quarterCount = updateCoinCount(quarterCount, false);
    updateDisplay();
});

document.getElementById("addHalfDollar").addEventListener("click", function () {
    halfDollarCount = updateCoinCount(halfDollarCount, true);
    updateDisplay();
});
document.getElementById("subtractHalfDollar").addEventListener("click", function () {
    halfDollarCount = updateCoinCount(halfDollarCount, false);
    updateDisplay();
});

document.getElementById("addDollar").addEventListener("click", function () {
    dollarCount = updateCoinCount(dollarCount, true);
    updateDisplay();
});
document.getElementById("subtractDollar").addEventListener("click", function () {
    dollarCount = updateCoinCount(dollarCount, false);
    updateDisplay();
});

// Initial display update
updateDisplay();