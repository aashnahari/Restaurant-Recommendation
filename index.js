const getResturantByCuisine = (request, response) => {
    const id = parseInt(request.params.id);
    const query = `SELECT * FROM user WHERE id = ?`;
    db.get(query, [id], (error, result) => {
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
    const id = parseInt(request.params.id);
    const query = `SELECT * FROM user WHERE id = ?`;
    db.get(query, [id], (error, result) => {
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


