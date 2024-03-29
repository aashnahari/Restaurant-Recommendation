const path = require("path");
const sqlite = require("sqlite3").verbose();
const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'mapquest',
  apiKey: '0fAWxx5m3Bls2bo8NgnbyH8JZ5WVZd0S'
}
const geocoder = NodeGeocoder(options);


const dbFile = path.join(__dirname, "restaurant.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});
const getResturantByCuisine = (request, response) => {
    const query = `SELECT * FROM mytable WHERE restaurant_type = ?`;
    console.log(request.body)
    db.all(query, [request.body.cuisine], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
      // If nothing is returned, then result will be undefined
      if (result) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    });
  };
 

  const getResturantByAddress = (request, response) => {
    const res =  geocoder.geocode(request.body.address, (error,result) =>
    {
      const lat = result[0]["latitude"]
      const long = result[0]["longitude"]
      const distance = 0.004505324
      const query = 'SELECT * FROM mytable WHERE longitude <= ? AND longitude >= ? AND latitude <= ? AND latitude >= ?'
      db.all(query, [long + distance,long-distance,lat+distance,lat-distance], (error, result) => {
        if (error) {
          console.error(error.message);
          response.status(400).json({ error: error.message });
          return;
        }
        function compareFn(a, b) {
          console.log(a)
          if (a['restaurant_type'] == request.body.cuisine && b['restaurant_type'] == request.body.cuisine) {
            return 0;
          }
          if (a['restaurant_type'] == request.body.cuisine) {
            return -1;
          }
          if (b['restaurant_type'] == request.body.cuisine){
            return 1;
          }
          return 0;
        }
      // If nothing is returned, then result will be undefined
        if (result) {
          if (request.body.cuisine != null){
            result.sort(compareFn);
            response.json(result);
          }
          
        } else {
          response.sendStatus(404);
        }
      });
    }); 
  };  

 
 
 
 
 
 
 
 
 
    
    
    
    
    
    
    

module.exports = {
  getResturantByCuisine,
  getResturantByAddress,
};


