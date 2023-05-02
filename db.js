const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "restaurant.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});
const getResturantByCuisine = (request, response) => {
    const query = `SELECT * FROM mytable WHERE restaurant_type = ?`;
    console.log(request.body)
    db.get(query, [request.body.cuisine], (error, result) => {
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



  const getResturantByName = (request, response) => {
    const query = `SELECT * FROM mytable WHERE name = ?`;
    db.get(query, [request.body.name], (error, result) => {
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
    const query = `SELECT * FROM mytable WHERE postal_code = ?`;
    db.get(query, [request.body.zipcode], (error, result) => {
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

module.exports = {
  getResturantByName,
  getResturantByCuisine,
  getResturantByAddress
};


