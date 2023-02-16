import { useState } from "react";
import axios from "axios";
import "./ShoppingForm.css";

function ShoppingForm({ getItems }) {
	const [nameInput, setItemInput] = useState("");
	const [quantityInput, setQuantityInput] = useState("");
	const [unitInput, setUnitInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			name: nameInput,
			quantity: quantityInput,
			unit: unitInput,
			isPurchased: false,
		};

		axios
			.post("/item", newItem)
			.then(() => {
				getItems();
				clearInputFields();
			})
			.catch((error) => {
				console.log("Error POST /item", error);
			});
	};

	const clearInputFields = () => {
		setItemInput("");
		setQuantityInput("");
		setUnitInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add Item</h2>
			<input
				onChange={(e) => setItemInput(e.target.value)}
				type="text"
				value={nameInput}
				placeholder="Item"
			/>
			<input
				onChange={(e) => setQuantityInput(e.target.value)}
				type="text"
				value={quantityInput}
				placeholder="Quantity"
			/>
			<input
				onChange={(e) => setUnitInput(e.target.value)}
				type="text"
				value={unitInput}
				placeholder="Unit"
			/>
			<button type="submit">Add Item</button>
		</form>
	);
}

export default ShoppingForm;
