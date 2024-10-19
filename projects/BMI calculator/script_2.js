
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');



  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } 
  else {
    const bmi = weight / (height * height);
    const bmiStatus = bmi < 18.5? 'Underweight' : bmi < 25? 'Normal weight' : bmi < 30? 'Overweight' : 'Obese';
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}, you are ${bmiStatus}.`;
  }
    

  
});