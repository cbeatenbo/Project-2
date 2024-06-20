const pBox = document.getElementById("p");
const rBox = document.getElementById("r");
const nBox = document.getElementById("n");


const answerSpan = document.querySelector("span");


const calcMortgage = function(){
    const pValue = Number(pBox.value);
    const rValue = Number(rBox.value);
    const nValue = Number(nBox.value);
    const payment = (pValue * rValue) / (1 - Math.pow(1 + rValue, -nValue));
    answerSpan.textContent = "" + payment.toFixed(2); 
}
