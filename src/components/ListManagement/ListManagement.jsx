import "./ListManagement.css";
import axios from "axios";

function ListManagement({ getItems, itemList }) {
	const handleReset = () => {
		axios
			.put("/item")
			.then((reponse) => {
				console.log(reponse);
				getItems();
			})
			.catch(() => {
				console.log("Error PUT /item", error);
			});
	};

	return (
		<>
			<button onClick={handleReset}>Reset</button>
		</>
	);
}

export default ListManagement;
