function calculateLoan() {
  const carPrice = parseFloat(document.getElementById('car-price').value);
  const downPayment = parseFloat(document.getElementById('down-payment').value);
  const annualRate = parseFloat(document.getElementById('interest-rate').value);
  const years = parseFloat(document.getElementById('years').value);

  if (isNaN(carPrice) || isNaN(downPayment) || isNaN(annualRate) || isNaN(years)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  if (downPayment >= carPrice) {
    alert("Down payment must be less than the car price.");
    return;
  }

  const principal = carPrice - downPayment;
  const totalMonths = years * 12;
  const totalInterest = principal * (annualRate / 100) * years;
  const totalPayment = principal + totalInterest;
  const monthlyPayment = totalPayment / totalMonths;

  document.getElementById('loan-amount').textContent = principal.toFixed(2);
  document.getElementById('total-interest').textContent = totalInterest.toFixed(2);
  document.getElementById('total-payment').textContent = totalPayment.toFixed(2);
  document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);

  document.getElementById('results').classList.remove('hidden');
}