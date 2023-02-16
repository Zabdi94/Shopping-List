const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// '/item' is the route

//POST new item to the data base
router.post("/", (req, res) => {
	const item = req.body;
	console.log(item);
	const sqlText = `INSERT INTO items ("name", "quantity", "unit", "isPurchased")
                    VALUES ($1, $2, $3, $4)`;

	pool.query(sqlText, [item.name, item.quantity, item.unit, item.isPurchased])
		.then((result) => {
			console.log(`Added item to the database`, item);
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log(`Error making database query ${sqlText}`, error);
			res.sendStatus(500);
		});
});

//GET all items from the database
router.get("/", (req, res) => {
	const sqlText = `SELECT * FROM items ORDER BY name`;

	pool.query(sqlText)
		.then((result) => {
			console.log(`Got stuff back from the database`, result);
			res.status(200);
			res.send(result.rows);
		})
		.catch((error) => {
			console.log(`Error making database query ${sqlText}`, error);
			res.sendStatus(500);
		});
});

    router.put('/:id',(req,res) => {
        //update Database
        console.log('in router.put',req.params.id);
        const sqlText = `
        UPDATE "items"
        SET "isPurchased" = true
        WHERE id =$1;
        `
        //Set variables for params
        const deleteId = req.params.id;
        
        //assign variables to params
        const sqlParams = [deleteId]
        
        //send sql query to the database
        pool.query(sqlText,sqlParams)
        .then ((result) => {
            res.send(result.rows);
            console.log('in items.router router.put then');
            res.sendStatus(200);
        })
            .catch ((error)=> {
                console.log('error making database updates',error);
                res.sendStatus(500);
            })

    });


    

module.exports = router;
