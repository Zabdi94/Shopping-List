import "./ShoppingList.css";
import Item from "../Item/Item";
import ListManagement from "../ListManagement/ListManagement";

function ShoppingList({ getItems, itemList }) {
	return (
		<>
			<ListManagement getItems={getItems} itemList={itemList} />
			{itemList.map((item) => {
				return <Item key={item.id} getItems={getItems} item={item} />;
			})}
		</>
	);
}

export default ShoppingList;
