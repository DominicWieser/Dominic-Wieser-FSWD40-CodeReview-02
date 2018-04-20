
var ProductOne = "Trip to London";
var ProductTwo = "Trip to Amsterdam";
var priceLondon = 2360;
var priceAmsterdam = 1189;

var sum = priceLondon + priceAmsterdam;
var output1 = " <p>If you want to buy a <b>" + ProductOne + "</b> and a <b>" + ProductTwo + "</b>, it costs:</p> <p>" + sum + " EUR</p>"

document.write(output1);

document.write("<br>");

var sum2 = (priceLondon + priceAmsterdam) * 0.9;
var output2 = "<p>If you want buy a<b>" + ProductOne + "</b> and a <b>" + ProductTwo + "</b> as a GoldenCard holder, you will get a 10% discount:</p><p>"+ sum2 +" EUR</p>"

document.write(output2);

