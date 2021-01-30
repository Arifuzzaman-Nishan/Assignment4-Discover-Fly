//global variable declare
var subTotal = 0;
var amountForSClass = 0;
var amountForEconomyClass = 0;
var ticketQuantity;
var vatCal = 0;
var totalAmount = 0;
const fClassPrice = 150;
const sClassPrice = 100;


//it returns the id
function getId(id) {
    return document.getElementById(id);
}


// it's set the value into the innerText
function setValueWithOneId(id,value){
    getId(id).innerText = value;
}


//it returns the ticketQuantity
//if the positiveNegative value is positive then the ticket quantity increment 
//if the positiveNegative value is negative then the ticket quantity decrement 
function ticketQuantityCount(positiveNegativeValue,ticketQuantity) {
    positiveNegativeValue == "positive" ? ticketQuantity++ : ticketQuantity--;
    return ticketQuantity;
}


//it returns the amount
function getAmount(ticketPrice, ticketQuantity) {

    return ticketPrice * ticketQuantity;

}


//it returns the first and second class total price
function getSubtotal(inputId, ticketPrice, ticketQuantity) {

    if (inputId == "f-class-input") {
        amountForSClass = getAmount(ticketPrice, ticketQuantity);
    }
    else if (inputId == "s-class-input") {
        amountForEconomyClass = getAmount(ticketPrice, ticketQuantity);
    }

    return amountForSClass + amountForEconomyClass;
}


// it returns the vat here 0.1 is 10% vat and subtotal is first and second class price sum
function vatCalculation(subTotal) {
    return 0.1 * subTotal;
}


//this is the main function it's calculate the main things in our project
//-->here btnId is which button we want to add eventHandler
//-->positiveNegativeValue is use to for increment or decrement quantity
//-->inputId is use to set/get the ticketQuantity value inside the input field
//-->ticketPrice is first and second class price.
function eventHandler(btnId, positiveNegativeValue, inputId, ticketPrice) {

    getId(btnId).addEventListener("click", function () {
        
        //it's takes the value from input field
        ticketQuantity = parseInt(getId(inputId).value);

        //this function is increment or decrement ticket quantity value
        ticketQuantity = ticketQuantityCount(positiveNegativeValue,ticketQuantity);

        //here check my ticket quantity is negative or not if negative then my quantity value is zero and show an alert message.
        if (ticketQuantity < 0) {
            ticketQuantity = 0;
            alert("ticketQuantity cannot be negative");
        }

        //it set the value into input field
        getId(inputId).value = ticketQuantity;

        //this function calculate the sum of two classes prices
        subTotal = getSubtotal(inputId, ticketPrice, ticketQuantity);

        //here sub-total is id name and it set the value into subtotal field
        setValueWithOneId("sub-total",subTotal);

        //it's calculate the vat 
         vatCal = parseFloat(vatCalculation(subTotal).toPrecision(4));

        // it set the vat and vat-calculation is a id name
        setValueWithOneId("vat-calculation",vatCal);

        //it set the total amount
        totalAmount = subTotal + vatCal;
        setValueWithOneId("total-amount",totalAmount);
    })

}


//this is function call for first class ticket for increment and decrement portion
eventHandler("f-class-plus-btn", "positive", "f-class-input", fClassPrice);
eventHandler("f-class-minus-btn", "negative", "f-class-input", fClassPrice);

//this is function call for second class ticket for increment and decrement portion
eventHandler("s-class-plus-btn", "positive", "s-class-input", sClassPrice);
eventHandler("s-class-minus-btn", "negative", "s-class-input", sClassPrice);


//this function is set the value into the innerText field
// and the getId is a function
function setValueWithTwoId(id1,id2){
    getId(id1).innerText = getId(id2).value;
}


function information(){
    //set value into flying-from and flying-to
    setValueWithTwoId("info-flying-from","input-flying-from");
    setValueWithTwoId("info-flying-to","input-flying-to");
    
    //set value into departure and return
    setValueWithTwoId("info-departure","input-departure");
    setValueWithTwoId("info-return","input-return");

    //first class and second class ticket count
    const fClassTicketQuantity = parseInt(getId("f-class-input").value);
    const sClassTicketQuantity = parseInt(getId("s-class-input").value);

    //set value into ticket quantity
    setValueWithOneId("f-class-ticket-quantity",fClassTicketQuantity);
    setValueWithOneId("s-class-ticket-quantity",sClassTicketQuantity);

    //set value into first class and second class ticket price
    // first class ticket price is 150
    //and second class ticket price is 100
    setValueWithOneId("f-class-price",fClassTicketQuantity*fClassPrice);
    setValueWithOneId("s-class-price",sClassTicketQuantity*sClassPrice);

    //set value into total ticket price
    setValueWithOneId("total-ticket-price",subTotal);

    //set value into vat
    setValueWithOneId("vat",vatCal);

    //set value into total price
    setValueWithOneId("total-price",totalAmount);
}


//this function is to show to the all ticket information if someone click in bookNow button and here book-now is a Id of bookNow button.
const bookNow = getId("book-now");

bookNow.addEventListener("click",function(){

    if(confirm("Are you sure you want to book this ticket?")){

        //here first-div-id is the first div of my project and using this id to hide the my first page 
        const bookingSection = getId("first-div-id");

        bookingSection.style.display = "none";
        const info = getId("ticket-info");
        info.style.display = "block";

        //this function show all the information after clicking book now button
        information();  
    }
})
