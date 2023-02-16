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

  const handleReset = () => {
    axios
      .put("/item")
      .then((response) => {
        console.log(response);
        getItems();
      })
      .catch(() => {
        console.log("Error PUT /item", error);
      });
  };

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDelete}>Clear</button>
    </>
  );
}

export default ListManagement;
