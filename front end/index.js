streetVal = document.querySelector('#streetInput')
avenueVal = document.querySelector('#avenueInput')
zipcodeVal = document.querySelector('#zipcodeInput')

streetVal.addEventListener('keydown', updateValue);
avenueVal.addEventListener('keydown', updateValue);
zipcodeVal.addEventListener('keydown', updateValue);


function updateValue(e) {
  if (e.keyCode !== 13) return
  console.log(e.target.value);
}