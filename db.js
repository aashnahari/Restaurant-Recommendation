const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "restaurant.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});
const getResturantByCuisine = (request, response) => {
    const cuisine = parseInt(request.params.id);
    const query = `SELECT * FROM mytable WHERE restaurant_type = ?`;
    db.get(query, [cuisine], (error, result) => {
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
    const resName = parseInt(request.params.id);
    const query = `SELECT * FROM name WHERE resName = ?`;
    db.get(query, [resName], (error, result) => {
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
};
