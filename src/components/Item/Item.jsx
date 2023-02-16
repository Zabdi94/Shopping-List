import "./Item.css";
import axios from "axios";
import { useState } from "react";

function Item({ getItems, itemList }) {

	


	
	
	
	
	
	
	
	
	
	const updateItem = (id =>{
		console.log('click updateItem',id)
		axios.put(`/items/${id}`)
		.then(response => {
			console.log('in app updateItem axios.then')
			getItems();
	
		})
		.catch(err => {
			alert('error updating items in app axios.put.catch')
		})
		
	});
		<button>UPDATE</button>
	
	return <div></div>;

}
export default Item;
