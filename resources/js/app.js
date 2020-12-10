function updateOrder() {
    const DONUTPRICE = 10;
    const TAXRATE = 0.16;

    let customerName = document.getElementById('buyerName').value;
    let numCakeDonuts = parseFloat(document.getElementById("cakedonuts").value);
    let numGlazedDonuts = parseFloat(document.getElementById("glazeddonuts").value);

    let total = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    let tax = (total * TAXRATE);
    let discount = (total * 0.02);
    let shippingCost = (0.10 * total);
    let subTotal = (total - tax - discount - shippingCost);

    document.getElementById("doughnutPrice").innerHTML = "Doughnut Price K " + DONUTPRICE.toFixed(2);
    document.getElementById("subtotal").innerHTML = "Subtotal = K " + subTotal.toFixed(2);
    document.getElementById("tax").innerHTML = "Tax = K " + tax.toFixed(2);
    document.getElementById("total").innerHTML = "TOTAL = K " + total.toFixed(2);

    if(total >= 5000){
        //total = total - discount;
        document.getElementById("message").innerHTML = "Congratulations " + customerName + "!!! You have saved " + discount.toFixed(2) + " Off your purchase. Also Claim a gift of your choice worth K 250, pick a meal for 5 people at hungry lion and Enjoy free Shipping today and on your next 5 orders.";
    }
    else if(total >= 3000){
        document.getElementById("message").innerHTML = "Congratulations " + customerName + "!!! Enjoy free Shipping today and on your next 2 orders, plus a meal for 3 people at hungry lion";
    }
    else if (total >= 2000) 
        {document.getElementById("message").innerHTML = "Congratulations " + customerName + "!!! Claim a free movie ticket for 2 at Freshview Cinema next weekend plus Enjoy free Shipping today and  on your next order.";}
    else if (total >= 1000)
        {document.getElementById("message").innerHTML = "Congratulations " + customerName + "!!! Enjoy free Shipping.";}
    else if (total > 0)
        {document.getElementById("message").innerHTML = customerName + " your shipping Cost is K " + shippingCost.toFixed(2) + ". Spend atleast K 1000 to enjoy free shipping."; } 
    else if (total == 0){
        document.getElementById("message").innerHTML = customerName + " please buy at least One doughnut";    
    }
    document.getElementById("discount").innerHTML = "Discount = K " + discount.toFixed(2);
}
function placeOrder() {
    // Submit order to server...
    form.submit();         
}