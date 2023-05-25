
enterButton = document.querySelector('.enterButton')
enterButton.addEventListener('click', entered);
var results = [];

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
    //getAddress(addressVal);
  }
}

function updateResults(){
  results.forEach(result => createHTML(result))
  function createHTML(result){
    const res = document.createElement('div');
    res.className = "container";
    const name = document.createTextNode(result['name']);
    console.log(result);
    res.appendChild(name);
    document.body.appendChild(res);

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
      console.log(results);
      if (results != null){
        updateResults()
      }
    })



};

// getCuisine("Seafood");