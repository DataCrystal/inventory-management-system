var totalCash = 500;
document.getElementById("total").innerHTML = totalCash;
var totalExpense = 0;
document.getElementById("total-expense").innerHTML = totalExpense;
var totalSellPrice = 0;
document.getElementById("total-sell").innerHTML = totalSellPrice;
//Potato
var pStock = 0;
var pCost = 2;
var pbutton = document.getElementById("potato");
pbutton.addEventListener("click", addStockP);

function addStockP() {
    if(totalCash < 2) {
        alert("Not Enough Cash");
    }
    if(totalCash >= 2) {
        pStock++;
        pCost += 2;
        totalCash = totalCash - 2;
        totalExpense = totalExpense + 2;
        document.getElementById("stock-potato").innerHTML = pStock;
        document.getElementById("potato-cost").innerHTML = "$" + (pCost - 2);
        document.getElementById("ffp").innerHTML = pStock;
        document.getElementById("lp").innerHTML = pStock;
        document.getElementById("total-expense").innerHTML = "$" + totalExpense;
        document.getElementById("total-expense").style.color = "#a12222";
        if(pStock > 0) {
            document.getElementById("lp").style.color = "#46a649";
            document.getElementById("stock-potato").style.color = "#46a649";
        }
        if(pStock == 0) {
            document.getElementById("lp").style.color = "#a12222";
            document.getElementById("stock-potato").style.color = "#a12222";
        }
        document.getElementById("total").innerHTML = totalCash;
    }
}
//Egg
var eStock = 0;
var eCost = 1;
var ebutton = document.getElementById("egg");
ebutton.addEventListener("click", addStockE);

function addStockE() {
    if(totalCash < 1) {
        alert("Not Enough Cash");
    }
    if(totalCash >= 1) {
        eStock++;
        eCost += 1;
        totalCash = totalCash - 1;
        totalExpense = totalExpense + 1;
        document.getElementById("ome").innerHTML = eStock;
        document.getElementById("le").innerHTML = eStock;
        document.getElementById("stock-egg").innerHTML = eStock;
        document.getElementById("egg-cost").innerHTML = "$" + (eCost - 1);
        if(eStock > 0) {
            document.getElementById("le").style.color = "#46a649";
            document.getElementById("stock-egg").style.color = "#46a649";
        }
        if(eStock == 0) {
            document.getElementById("le").style.color = "#a12222";
            document.getElementById("stock-egg").style.color = "#a12222";
        }
        document.getElementById("total-expense").innerHTML = "$" + totalExpense;
        document.getElementById("total-expense").style.color = "#a12222";
        document.getElementById("total").innerHTML = totalCash;
    }
}
//Onion
var oStock = 0;
var oCost = 2;
var obutton = document.getElementById("onion");
obutton.addEventListener("click", addStockO);

function addStockO() {
    if(totalCash < 2) {
        alert("Not Enough Cash");
    }
    if(totalCash >= 2) {
        oStock++;
        oCost += 2;
        totalCash = totalCash - 2;
        totalExpense = totalExpense + 2;
        document.getElementById("omo").innerHTML = oStock;
        document.getElementById("lo").innerHTML = oStock;
        document.getElementById("stock-onion").innerHTML = oStock;
        document.getElementById("onion-cost").innerHTML = "$" + (oCost - 2);
        document.getElementById("lo").style.color = "#46a649";
        if(oStock > 0) {
            document.getElementById("lo").style.color = "#46a649";
            document.getElementById("stock-onion").style.color = "#46a649";
        }
        if(oStock == 0) {
            document.getElementById("lo").style.color = "#a12222";
            document.getElementById("stock-onion").style.color = "#a12222";
        }
        document.getElementById("total-expense").innerHTML = "$" + totalExpense;
        document.getElementById("total-expense").style.color = "#a12222";
        document.getElementById("total").innerHTML = totalCash;
    }
}

var sellOneButton = document.getElementById("french-fries");
sellOneButton.addEventListener("click", sellOne);

function sellOne() {
    if(pStock < 3) {
        alert("Not Enough Ingredients");
    }
    if(pStock >= 3) {
        totalCash += 40;
        totalSellPrice += 40;
        document.getElementById("total").innerHTML = totalCash;
        document.getElementById("total-sell").innerHTML = "$" + totalSellPrice;
        document.getElementById("total-sell").style.color = "#418043";
        pStock = pStock - 3;
        document.getElementById("stock-potato").innerHTML = pStock;
        document.getElementById("ffp").innerHTML = pStock;
        document.getElementById("lp").innerHTML = pStock;
    }
    if(pStock > 0) {
        document.getElementById("lp").style.color = "#46a649";
        document.getElementById("stock-potato").style.color = "#46a649";
    }
    if(pStock == 0) {
        document.getElementById("lp").style.color = "#a12222";
        document.getElementById("stock-potato").style.color = "#a12222";
    }
}

var sellTwoButton = document.getElementById("omlettes");
sellTwoButton.addEventListener("click", sellTwo);

function sellTwo() {
    if(eStock < 4 || oStock < 1) {
        alert("Not Enough Ingredients");
    }
    if(eStock >= 4 && oStock >= 1) {
        totalCash += 30;
        totalSellPrice += 30;
        document.getElementById("total").innerHTML = totalCash;
        document.getElementById("total-sell").innerHTML = "$" + totalSellPrice;
        eStock = eStock - 4;
        oStock = oStock - 1;
        document.getElementById("stock-egg").innerHTML = eStock;
        document.getElementById("ome").innerHTML = eStock;
        document.getElementById("le").innerHTML = eStock;
        document.getElementById("stock-onion").innerHTML = oStock;
        document.getElementById("omo").innerHTML = oStock;
        document.getElementById("lo").innerHTML = oStock;
    }
    if(eStock > 0) {
        document.getElementById("le").style.color = "#46a649";
        document.getElementById("stock-egg").style.color = "#46a649";
    }
    if(eStock == 0) {
        document.getElementById("le").style.color = "#a12222";
        document.getElementById("stock-egg").style.color = "#a12222";
    }
    if(oStock > 0) {
        document.getElementById("lo").style.color = "#46a649";
        document.getElementById("stock-onion").style.color = "#46a649";
    }
    if(oStock == 0) {
        document.getElementById("lo").style.color = "#a12222";
        document.getElementById("stock-onion").style.color = "#a12222";
    }
}