import "./ShoppingList.css";
import Item from "../Item/Item";
import ListManagement from "../ListManagement/ListManagement";

function ShoppingList({ getItems, itemList }) {
	return (
		<>
			<ListManagement getItems={getItems} itemList={itemList} />
			<Item getItems={getItems} itemList={itemList} />
		</>
	);
}

export default ShoppingList;
