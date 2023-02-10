
const express = require("express");
const app = express();
const db = require("./db");
const PORT = 4000;
//#endregion Setup

//-----------------------------
//#region App Config
//-----------------------------
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
// Middleware that parses POST / PUT requests from a client
app.use(express.json());

// Handle CORS w/ client
// For more information about CORS (Cross-Origin Resource Sharing):
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
  // Allow access from multiple origins
  const allowedOrigins = [
    "http://localhost:8080",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  // Allow specific requests
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Pass to next layer of middleware
  next();
});
//#endregion App Config

//-----------------------------
//#region Database Routes
//-----------------------------
app.get("/", (req, res) => {
  res.json({ info: "Demo app for Restaurants" });
});

// This endpoint allows a client to get a single user by id
app.get("/restaurant", db.getResturantByName);

// Get all users
app.get("/cuisine", db.getResturantByCuisine);

app.get("/address", db.getResturantByAddress);

//-----------------------------
//#region Server
//-----------------------------
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
//#endregion Server