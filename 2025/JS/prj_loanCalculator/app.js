// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e){
     // Hide result
     document.getElementById('result').style.display = 'none';

     // Show loader
     document.getElementById('loading').style.display = 'block';

     setTimeout(calculateResults, 2000);

       e.preventDefault();
});

// Calculate Result
function calculateResults() {
    console.log('Calculating ...')
         // UI variables
     const amount = document.getElementById('amount');
     const interest = document.getElementById('interest');
     const years = document.getElementById('years');
     const monthlyPayement = document.getElementById('monthly-payment');
     const totalPayment = document.getElementById('total-payment'); 
     const totalInterest = document.getElementById('total-interest');

     const principal = parseFloat(amount.value);
     const calculatedInterest = parseFloat(interest.value) / 100 / 12;
     const calculatedPayments = parseFloat(years.value) * 12;

     // Compute monthly payment
     const x = Math.pow(1 + calculatedInterest, calculatedPayments);
     const monthly = (principal*x*calculatedInterest)/(x-1);

          if(isFinite(monthly)) {
               monthlyPayment.value = monthly.toFixed(2);
               totalPayment.value = (monthly * calculatedPayments).toFixed(2);
               totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

               // Show result
               document.getElementById('result').style.display = 'block';

               // Hide Loader
               document.getElementById('loading').style.display = 'none';
          } else {
               showError('Please check your numbers');
          }


          

   
}