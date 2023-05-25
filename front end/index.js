
enterButton = document.querySelector('.enterButton')
enterButton.addEventListener('click', entered);
const results = [];

function entered() {
  updateValue()
}

function updateValue() {
  
  
  
  
  if (document.querySelector('#addressInput').value) {
    addressVal = document.querySelector('#addressInput').value
    if (document.querySelector('#cuisineInput').value) {
      cuisineVal = document.querySelector('#cuisineInput').value
      getAddress(addressVal,cuisineVal);
    }
    getAddress(addressVal);
  }
}

function updateResults(){
  results.forEach(createHTML)
  function createHTML(){
    
  }
}

const getCuisine = (cuisine) => {
  axios.post('http://localhost:4000/cuisine',
    {  cuisine: cuisine })
    .then(response => {
    const restaurants = response.data;
      console.log(restaurants);
    })
    .catch(error => console.error(error));
};


const getAddress = (address,cuisine) => {
  axios.post('http://localhost:4000/address',
    {  address: address, cuisine: cuisine })
    .then(response => {
      results = response.data;
      if (results != null){
        updateResults()
      }
    })



};

getCuisine("Seafood");