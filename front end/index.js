
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
  
  
  
  var oldClass = document.getElementsByClassName("results");
  while(oldClass.length > 0){
    oldClass[0].parentNode.removeChild(oldClass[0]);
  }

  const resultClass = document.createElement('div');
  resultClass.className = "results";
  if (results.length == 0){
    const resultText = document.createTextNode("Nothing Nearby that Matched Results");
    resultClass.appendChild(resultText);
    document.body.append(resultClass);
  }
  else{
  const resultText = document.createElement("span");
  resultText.innerText = "RESULTS:"
  resultClass.appendChild(resultText);

  

  results.forEach(result => createHTML(result))

  function createHTML(result){
    
    const res = document.createElement('div');
    res.className = "container";

    const name = document.createElement("a");
    name.innerHTML = result['name'];
    name.style.fontSize = "175%";
    name.href = result['website'];
    res.appendChild(name);

    res.appendChild(document.createElement("br"));

    const address = document.createElement("span");

    address.innerText = result['street_address'];
    res.appendChild(address);

    res.appendChild(document.createElement("br"));
    res.appendChild(document.createElement("br"));

    const phone = document.createElement("span");
    phone.innerText = "Phone Number: " + result['phone'];
    res.appendChild(phone);

    
    resultClass.appendChild(document.createElement("br"))
    resultClass.appendChild(res);
    


  }
  document.body.append(resultClass);
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