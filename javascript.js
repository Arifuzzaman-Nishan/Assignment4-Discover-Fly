var subTotal = 0;
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

var ticketQuantity;
var vatCal = 0;
var totalAmount = 0;

function eventHandler(btnId, positiveNegativeValue, inputId, ticketPrice) {

    getId(btnId).addEventListener("click", function () {
        ticketQuantity = parseInt(getId(inputId).value);

        ticketQuantity = ticketQuantityCount(positiveNegativeValue,ticketQuantity);

        if (ticketQuantity < 0) {
            ticketQuantity = 0;
            alert("ticketQuantity cannot be negative");
        }

        getId(inputId).value = ticketQuantity;

        subTotal = getSubtotal(inputId, ticketPrice, ticketQuantity);
        getId("sub-total").innerText = subTotal;

         vatCal = parseFloat(vatCalculation(subTotal).toPrecision(4));

        getId("vat-calculation").innerText = vatCal;

        totalAmount = subTotal + vatCal;
        getId("total-amount").innerText = totalAmount;
    })

}


eventHandler("f-class-plus-btn", "positive", "f-class-input", 150);

eventHandler("f-class-minus-btn", "negative", "f-class-input", 150);

eventHandler("s-class-plus-btn", "positive", "s-class-input", 100);

eventHandler("s-class-minus-btn", "negative", "s-class-input", 100);



function information(){
    //flying from and flying to
    getId("info-flying-from").innerText = getId("input-flying-from").value;
    getId("info-flying-to").innerText = getId("input-flying-to").value;
    
    // departure and return
    getId("info-departure").innerText = getId("input-departure").value;
    getId("info-return").innerText = getId("input-return").value;

    //first class and second class ticket count
    const fClassTicketQuantity = parseInt(getId("f-class-input").value);
    const sClassTicketQuantity = parseInt(getId("s-class-input").value);

    getId("f-class-ticket-quantity").innerText = fClassTicketQuantity;
    getId("s-class-ticket-quantity").innerText = sClassTicketQuantity;

    //first class and second class ticket price
    getId("f-class-price").innerText = fClassTicketQuantity*150;
    getId("s-class-price").innerText = sClassTicketQuantity*100;

    //total ticket price
    getId("total-ticket-price").innerText = subTotal;

    //vat
    getId("vat").innerText = vatCal;

    //total price
    getId("total-price").innerText = totalAmount;

}


const bookNow = getId("book-now");
bookNow.addEventListener("click",function(){
    var text;
    if(confirm("Are you sure you want to book this ticket?")){
        const bookingSection = getId("first");
        bookingSection.style.display = "none";
        const info = getId("ticket-info");
        info.style.display = "block";
        information();

        
    }
    else console.log("no pressed");
})
