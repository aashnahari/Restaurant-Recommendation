
enterButton = document.querySelector('.enterButton')
enterButton.addEventListener('click', entered);

function entered() {
  updateValue()
}

function updateValue() {
  if (document.querySelector('#cuisineInput').value) {
    cuisineVal = document.querySelector('#cuisineInput').value
    console.log(cuisineVal);
  }
  if (document.querySelector('#streetInput').value) {
    streetVal = document.querySelector('#streetInput').value
    console.log(streetVal);
  }
  if (document.querySelector('#avenueInput').value) {
    avenueVal = document.querySelector('#avenueInput').value
    console.log(avenueVal);
  }
  if (document.querySelector('#zipcodeInput').value) {
    zipcodeVal = document.querySelector('#zipcodeInput').value
    console.log(zipcodeVal);
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

const getZipcode = (zipcode) => {
  axios.post('http://localhost:4000/zipcode',
    {  zipcode: zipcode })
    .then(response => {
    const restaurants = response.data;
      console.log(restaurants);
    })
    .catch(error => console.error(error));
};

const getAddress = (address) => {
  axios.post('http://localhost:4000/address',
    {  address: address })
    .then(response => {
    const restaurants = response.data;
      console.log(restaurants);
    })
    .catch(error => console.error(error));
};

getCuisine("Seafood");
getZipcode("10021");
getAddress("Fifth");