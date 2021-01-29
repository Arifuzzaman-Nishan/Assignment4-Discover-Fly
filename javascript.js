// const fClassPlusBtn = document.getElementById("f-class-plus-btn");
// var fClassPlusInputCount = 0;
// fClassPlusBtn.addEventListener("click",function(){
//     document.getElementById("f-class-input").value = ++fClassPlusInputCount;
//     const fClassPlusAmount = fClassPlusInputCount*150;

// })


var subTotal;
// var ticketQuantity = 0;
var amountForSClass = 0;
var amountForEconomyClass = 0;

function getId(id) {
    return document.getElementById(id);
}

function getAmount(ticketPrice, ticketQuantity) {

    return ticketPrice * ticketQuantity;

}

function  getSubtotal(inputId,ticketPrice,ticketQuantity){
     if (inputId == "f-class-input") {
            amountForSClass = getAmount(ticketPrice, ticketQuantity);
        }
        else if (inputId == "s-class-input") {
            amountForEconomyClass = getAmount(ticketPrice, ticketQuantity);
        }

       return amountForSClass + amountForEconomyClass;
}

function eventHandler(btnId, positiveNegativeValue, inputId, ticketPrice) {

    getId(btnId).addEventListener("click", function () {
        var ticketQuantity = parseInt(getId(inputId).value);

        positiveNegativeValue == "positive" ? ticketQuantity++ : ticketQuantity--;

        if (ticketQuantity < 0)
            ticketQuantity = 0;

        getId(inputId).value = ticketQuantity;

        subTotal = getSubtotal(inputId,ticketPrice,ticketQuantity);

        if (subTotal >= 0)
            getId("sub-total").innerText = subTotal;
    })



}
eventHandler("f-class-plus-btn", "positive", "f-class-input", 150);
eventHandler("f-class-minus-btn", "negative", "f-class-input", 150);
eventHandler("s-class-plus-btn", "positive", "s-class-input", 100);
eventHandler("s-class-minus-btn", "negative", "s-class-input", 100);

// s-class-minus-btn
// s-class-input