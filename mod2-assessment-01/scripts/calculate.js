function addDate(){
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    
}

function estimate() {
    //sandwich code. this is very basic code... as we learn more involved features of javascript, I imagine this is going to look barbaric.
   
    let name = document.getElementById("name").value;
    let sandwich1PriceString = document.getElementById("sandwich1Price").getAttribute("price");
    let sandwich1Price = parseFloat(sandwich1PriceString);
    let sandwichquantity1 = parseInt(document.getElementById("sandwich1").value);
    let sandwichtotalPrice1 = sandwich1Price * sandwichquantity1;

    let sandwich2PriceString = document.getElementById("sandwich2Price").getAttribute("price");
    let sandwich2Price = parseFloat(sandwich2PriceString);
    let sandwichquantity2 = parseInt(document.getElementById("sandwich2").value);
    let sandwichtotalPrice2 = sandwich2Price * sandwichquantity2;

    let sandwich3PriceString = document.getElementById("sandwich3Price").getAttribute("price");
    let sandwich3Price = parseFloat(sandwich3PriceString);
    let sandwichquantity3 = parseInt(document.getElementById("sandwich3").value);
    let sandwichtotalPrice3 = sandwich3Price * sandwichquantity3;

    let sandwich4PriceString = document.getElementById("sandwich4Price").getAttribute("price");
    let sandwich4Price = parseFloat(sandwich4PriceString);
    let sandwichquantity4 = parseInt(document.getElementById("sandwich4").value);
    let sandwichtotalPrice4 = sandwich4Price * sandwichquantity4;

    let sandwich5PriceString = document.getElementById("sandwich5Price").getAttribute("price");
    let sandwich5Price = parseFloat(sandwich5PriceString);
    let sandwichquantity5 = parseInt(document.getElementById("sandwich5").value);
    let sandwichtotalPrice5 = sandwich5Price * sandwichquantity5;

    let totalSandwichPrice = sandwichtotalPrice1 + sandwichtotalPrice2 + sandwichtotalPrice3 + sandwichtotalPrice4 + sandwichtotalPrice5;

    //drink code

    let drink1PriceString = document.getElementById("drink1Price").getAttribute("price");
    let drink1Price = parseFloat(drink1PriceString);
    let drinkquantity1 = parseInt(document.getElementById("drink1").value);
    let drinktotalPrice1 = drink1Price * drinkquantity1;

    let drink2PriceString = document.getElementById("drink2Price").getAttribute("price");
    let drink2Price = parseFloat(drink2PriceString);
    let drinkquantity2 = parseInt(document.getElementById("drink2").value);
    let drinktotalPrice2 = drink2Price * drinkquantity2;

    let drink3PriceString = document.getElementById("drink3Price").getAttribute("price");
    let drink3Price = parseFloat(drink3PriceString);
    let drinkquantity3 = parseInt(document.getElementById("drink3").value);
    let drinktotalPrice3 = drink3Price * drinkquantity3;

    let drink4PriceString = document.getElementById("drink4Price").getAttribute("price");
    let drink4Price = parseFloat(drink4PriceString);
    let drinkquantity4 = parseInt(document.getElementById("drink4").value);
    let drinktotalPrice4 = drink4Price * drinkquantity4;

    let drink5PriceString = document.getElementById("drink5Price").getAttribute("price");
    let drink5Price = parseFloat(drink5PriceString);
    let drinkquantity5 = parseInt(document.getElementById("drink5").value);
    let drinktotalPrice5 = drink5Price * drinkquantity5;

    let totaldrinkPrice = drinktotalPrice1 + drinktotalPrice2 + drinktotalPrice3 + drinktotalPrice4 + drinktotalPrice5;


    //dessert code

    let dessert1PriceString = document.getElementById("dessert1Price").getAttribute("price");
    let dessert1Price = parseFloat(dessert1PriceString);
    let dessertquantity1 = parseInt(document.getElementById("dessert1").value);
    let desserttotalPrice1 = dessert1Price * dessertquantity1;

    let dessert2PriceString = document.getElementById("dessert2Price").getAttribute("price");
    let dessert2Price = parseFloat(dessert2PriceString);
    let dessertquantity2 = parseInt(document.getElementById("dessert2").value);
    let desserttotalPrice2 = dessert2Price * dessertquantity2;

    let dessert3PriceString = document.getElementById("dessert3Price").getAttribute("price");
    let dessert3Price = parseFloat(dessert3PriceString);
    let dessertquantity3 = parseInt(document.getElementById("dessert3").value);
    let desserttotalPrice3 = dessert3Price * dessertquantity3;

    let dessert4PriceString = document.getElementById("dessert4Price").getAttribute("price");
    let dessert4Price = parseFloat(dessert4PriceString);
    let dessertquantity4 = parseInt(document.getElementById("dessert4").value);
    let desserttotalPrice4 = dessert4Price * dessertquantity4;

    let dessert5PriceString = document.getElementById("dessert5Price").getAttribute("price");
    let dessert5Price = parseFloat(dessert5PriceString);
    let dessertquantity5 = parseInt(document.getElementById("dessert5").value);
    let desserttotalPrice5 = dessert5Price * dessertquantity5;

    let totaldessertPrice = desserttotalPrice1 + desserttotalPrice2 + desserttotalPrice3 + desserttotalPrice4 + desserttotalPrice5;


    let finaltotal = totalSandwichPrice + totaldrinkPrice + totaldessertPrice;
    document.getElementById("estimate").innerHTML = "Final cost for: " + name + " = $" + finaltotal.toFixed(2);
}