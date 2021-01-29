var subTotal;
var amountForSClass = 0;
var amountForEconomyClass = 0;

function getId(id) {
    return document.getElementById(id);
}

function ticketQuantityCount(positiveNegativeValue,ticketQuantity) {
    positiveNegativeValue == "positive" ? ticketQuantity++ : ticketQuantity--;
    return ticketQuantity;
}

function getAmount(ticketPrice, ticketQuantity) {

    return ticketPrice * ticketQuantity;

}


function getSubtotal(inputId, ticketPrice, ticketQuantity) {
    if (inputId == "f-class-input") {
        amountForSClass = getAmount(ticketPrice, ticketQuantity);
    }
    else if (inputId == "s-class-input") {
        amountForEconomyClass = getAmount(ticketPrice, ticketQuantity);
    }

    return amountForSClass + amountForEconomyClass;
}


function vatCalculation(subTotal) {
    return 0.1 * subTotal;
}


function eventHandler(btnId, positiveNegativeValue, inputId, ticketPrice) {

    getId(btnId).addEventListener("click", function () {
        var ticketQuantity = parseInt(getId(inputId).value);

        ticketQuantity = ticketQuantityCount(positiveNegativeValue,ticketQuantity);

        if (ticketQuantity < 0) {
            ticketQuantity = 0;
        }

        getId(inputId).value = ticketQuantity;

        subTotal = getSubtotal(inputId, ticketPrice, ticketQuantity);
        getId("sub-total").innerText = subTotal;

        var vatCal = parseFloat(vatCalculation(subTotal).toPrecision(4));

        getId("vat-calculation").innerText = vatCal;

        const totalAmount = subTotal + vatCal;
        getId("total-amount").innerText = totalAmount;
    })

}


eventHandler("f-class-plus-btn", "positive", "f-class-input", 150);


eventHandler("f-class-minus-btn", "negative", "f-class-input", 150);


eventHandler("s-class-plus-btn", "positive", "s-class-input", 100);


eventHandler("s-class-minus-btn", "negative", "s-class-input", 100);

