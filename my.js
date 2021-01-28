document.getElementById("plusBtn").addEventListener("click",function(event){
    
    // quantity
    quantityNumber("iphoneQuantity",1);
    // price
    priceNumber("iphonePrice",1219);
    priceNumber("amount",1219);
    priceNumber("subTotal",1219);
    document.getElementById("taxAmount").innerText = taxAmount("taxAmount",122);
    
    
    
});
                                       
document.getElementById("minusBtn").addEventListener("click",function(){
    // quantity
    quantityNumber("iphoneQuantity",-1);
    // price
    priceNumber("iphonePrice",-1219);
    priceNumber("subTotal",-1219);
    document.getElementById("taxAmount").innerText = taxAmount("taxAmount",-122);
    priceNumber("amount",-1219);
    
    
});           

document.getElementById("secondPlusBtn").addEventListener("click",function(event){
    
    // quantity
    quantityNumber("casingQuantity",1);
    // price
    priceNumber("casingPrice",59);
    priceNumber("amount",59);
    document.getElementById("taxAmount").innerText = taxAmount("taxAmount",6);
    
    
    
    
});
                                       
document.getElementById("secondMinusBtn").addEventListener("click",function(){
    // quantity
    quantityNumber("casingQuantity",-1);
    // price
    priceNumber("casingPrice",-59);
    priceNumber("amount",-59);
    document.getElementById("taxAmount").innerText = taxAmount("taxAmount",-6);
    
    
});           


function quantityNumber(id,quantity){
var iphoneQuantity = document.getElementById(id).value;
var iphoneQuantityNumber = parseInt(iphoneQuantity);
    document.getElementById(id).value= iphoneQuantityNumber + quantity;
}
function priceNumber(id,value){

    var iphonePrice = document.getElementById(id).innerText;
    var iphonePriceNumber = parseInt(iphonePrice);
    var totalPrice = iphonePriceNumber + value;
     
    document.getElementById(id).innerText= totalPrice;

}
function taxAmount(id,value){

    var iphonePrice = document.getElementById(id).innerText;
    var taxAmount = parseFloat(iphonePrice);
     
     
    return Math.round(taxAmount) + value;

}