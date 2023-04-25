streetVal = document.querySelector('#streetInput')
avenueVal = document.querySelector('#avenueInput')
zipcodeVal = document.querySelector('#zipcodeInput')
cuisineVal = document.querySelector('#cuisineInput')

streetVal.addEventListener('keydown', updateValue);
avenueVal.addEventListener('keydown', updateValue);
zipcodeVal.addEventListener('keydown', updateValue);
cuisineVal.addEventListener('keydown', updateValue);


function updateValue(e) {
  if (e.keyCode !== 13) return
  console.log(e.target.value);
}