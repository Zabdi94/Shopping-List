const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// '/item' is the route

//POST new item to the data base
router.post("/", (req, res) => {
  const item = req.body;
  const sqlText = `INSERT INTO items ("name", "quantity", "unit", "isPurchased")
                    VALUES ($1, $2, $3, $4)`;

  pool
    .query(sqlText, [item.name, item.quanity, item.unit, item.isPurchased])
    .then((result) => {
      console.log(`Added item to the database`, item);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
