import "./Item.css";
import axios from 'axios';

function Item({ getItems, item }) {


	const deleteItem = (e) => {
		const id = e.target.value;
		console.log(id);
		axios.delete(`/item/${id}`)
				.then(() => {
					getItems(); 
				})
				.catch((err) => {
					console.log('Delete request error', err)
				})
			}

	return (
	<div>
		<button value={item.id} onClick={(e) => deleteItem(e)}>Delete</button>
	</div>);
}

export default Item;
