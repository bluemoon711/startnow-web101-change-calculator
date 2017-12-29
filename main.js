// Write your JavaScript here

function calculateRest(x, y) {
    var result = y - x;
    return result;
}

function handleClickEvent(e) {
    var sale = parseFloat(document.getElementById("amount-due").value);
    var customer = parseFloat(document.getElementById("amount-received").value);
    var result = calculateRest(sale, customer);
    document.getElementById('dollars-output').innerHTML = Math.floor(result);
    var tempq = result - Math.floor(result);
    if (tempq > 0.75) {
        document.getElementById('quarters-output').innerHTML = 3;
    } else if (tempq > 0.5) {
        document.getElementById('quarters-output').innerHTML = 2;
    } else if (tempq > 0.25) {
        document.getElementById('quarters-output').innerHTML = 1;
    } else {
        document.getElementById('quarters-output').innerHTML = 0;
    }
    var tempd = tempq - 0.25*document.getElementById('quarters-output').innerHTML;
    if (tempd > 0.20) {
        document.getElementById('dimes-output').innerHTML = 2;
    } else if (tempd > 0.10) {
        document.getElementById('dimes-output').innerHTML = 1;
    } else {
        document.getElementById('dimes-output').innerHTML = 0;
    }
    var tempn = tempd - 0.10*document.getElementById('dimes-output').innerHTML;
    if (tempn > 0.05) {
        document.getElementById('nickels-output').innerHTML = 1;
    } else {
        document.getElementById('nickels-output').innerHTML = 0;
    }
    var tempp = tempn - 0.05*document.getElementById('nickels-output').innerHTML;
        document.getElementById('pennies-output').innerHTML = Math.round(tempp/0.01);
    }

    
document.getElementById('calculate-change').addEventListener("click", handleClickEvent);