import "./ListManagement.css";
import axios from "axios";

function ListManagement({ getItems, itemList }) {
  const handleDelete = () => {
    axios
      .delete("/item")
      .then((response) => {
        getItems();
      })
      .catch((error) => {
        alert("Error clearing all items");
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={handleDelete}>Clear</button>
    </>
  );
}

export default ListManagement;
