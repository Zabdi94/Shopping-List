import "./Item.css";
import axios from "axios";
import { useState } from "react";

function Item({ getItems, item }) {
	const deleteItem = (e) => {
		const id = e.target.value;
		console.log(id);
		axios
			.delete(`/item/${id}`)
			.then(() => {
				getItems();
			})
			.catch((err) => {
				console.log("Delete request error", err);
			});
	};

	const updateItem = (e) => {
		const id = e.target.value;
		console.log("click updateItem", id);
		axios
			.put(`/item/${id}`)
			.then((response) => {
				console.log("in app updateItem axios.then");
				getItems();
			})
			.catch((err) => {
				alert("error updating items in app axios.put.catch");
			});
	};

	return (
		<div>
			<button value={item.id} onClick={(e) => deleteItem(e)}>
				Delete
			</button>
			<button value={item.id} onClick={(e) => updateItem(e)}>
				Update
			</button>
		</div>
	);
}

export default Item;
