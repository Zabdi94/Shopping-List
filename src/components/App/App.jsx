import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import ShoppingList from "../ShoppingList/ShoppingList";
import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";
import Header from "../Header/Header.jsx";

function App() {
	let [itemList, setItemList] = useState([]);

	//on load, get items
	useEffect(() => {
		getItems();
	}, []);

	const getItems = () => {
		axios
			.get("/item")
			.then((response) => {
				setItemList(response.data);
			})
			.catch((err) => {
				alert("Error getting items");
				console.log(err);
			});
	};

	return (
		<div className="App">
			<Header />
			<ShoppingForm getItems={getItems} />
			<ShoppingList getItems={getItems} itemList={itemList} />
		</div>
	);
}

export default App;
