enterButton = document.querySelector('.enterButton')
enterButton.addEventListener('click', entered);

function entered(){
  updateValue()
}

function updateValue() {
  if (document.querySelector('#cuisineInput').value){
    cuisineVal = document.querySelector('#cuisineInput').value
    console.log(cuisineVal);
  }
  if (document.querySelector('#streetInput').value){
    streetVal = document.querySelector('#streetInput').value
    console.log(streetVal);
  }
  if (document.querySelector('#avenueInput').value){
    avenueVal = document.querySelector('#avenueInput').value
    console.log(avenueVal);
  }
  if (document.querySelector('#zipcodeInput').value){
    zipcodeVal = document.querySelector('#zipcodeInput').value
    console.log(zipcodeVal);
  }
}