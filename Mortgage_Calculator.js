const pBox = document.getElementById("p");
const rBox = document.getElementById("r");
const nBox = document.getElementById("n");

const answerSpan = document.querySelector("span");

const calcMortgage = function(){
    const pValue = Number(pBox.value);
    const rValue = Number(rBox.value) / 12 / 100;
    const nValue = Number(nBox.value) * 12;
    const payment = (pValue * rValue) / (1 - Math.pow(1 + rValue, -nValue));
    const monthlyPaymentElement = document.querySelector(".monthly_payment");
    monthlyPaymentElement.textContent = payment.toFixed(2);  
}

document.getElementById("calculateButton").addEventListener("click", calcMortgage);
