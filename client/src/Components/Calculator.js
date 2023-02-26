import React, {useState} from 'react'
import "../Style/Calculator.css"


function Calculator() {
        const[principalInput, setPrincipalInput]=useState("")
        const[interestRateInput, setInterestRateInput]=useState("")
        const[yearsInput, setYearsInput]=useState("")
        
        const[resultDiv, setResultDiv]=useState("")
        function calculateMortgage(principal, interestRate, years) {
            // Convert the interest rate to a decimal
            const monthlyRate = interestRate / 100 / 12;

            // Calculate the total number of monthly payments
            const months = years * 12;

            // Calculate the monthly mortgage payment using the formula:
            // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
            // where P is the monthly payment, L is the principal amount,
            // c is the monthly interest rate, and n is the total number of payments.
            const mortgagePayment = principal * (monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);

            return mortgagePayment;
        }

        // const principalInput = document.getElementById('principal');
        // const interestRateInput = document.getElementById('interest-rate');
        // const yearsInput = document.getElementById('years');
        // const calculateBtn = document.getElementById('calculate-btn');
        // const resultDiv = document.getElementById('result');

       function calculateButton(){
        console.log(principalInput, interestRateInput)
            const principal = parseFloat(principalInput);
            const interestRate = parseFloat(interestRateInput);
            const years = parseInt(yearsInput);

            if (isNaN(principal) || isNaN(interestRate) || isNaN(years)) {
                resultDiv.innerHTML = 'Please enter valid input values';
            } else {
                const mortgagePayment = calculateMortgage(principal, interestRate, years);
                let result = `The monthly mortgage payment is $${mortgagePayment.toFixed(2)}`;
                setResultDiv(result)
            }
        };

  return (
    <div className="calculator">
	    <title>Mortgage Calculator</title>

        <div><h1>Mortgage Calculator</h1></div>
        <div><label for="principal"></label></div>
        <div><input className="effect-1" placeholder="Principal Amount" type="number" id="principal" value={principalInput} onChange={(e)=> setPrincipalInput(e.target.value)}/></div>
        <div><label for="interest-rate"></label></div>
        <div><input className="effect-1" placeholder="Interest Rate" type="number" id="interest-rate"  value={interestRateInput} onChange={(e)=> setInterestRateInput(e.target.value)}/></div>
        <div><label for="years"></label></div>
        <div><input className="effect-1" placeholder="Loan Term in Years" type="number" id="years"value={yearsInput} onChange={(e)=> setYearsInput(e.target.value)}/></div>
        <div>
            <br/>
            <button className="login-btn-submit" id="calculate-btn" onClick={()=>calculateButton()}>Calculate Mortgage Payment</button></div>
        <div id="result">{resultDiv}</div>
        

    </div>
  )
}

export default Calculator