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
        alert("error updating items in app axios.put.catch", err);
      });
  };

  const getListItem = (item) => {
    console.log(item.isPurchased);
    if (item.isPurchased === false) {
      return (
        <div>
          <p>{item.name}</p>
          <p>
            {item.quantity} {item.unit}
          </p>
          <button value={item.id} onClick={(e) => deleteItem(e)}>
            Remove
          </button>
          <button value={item.id} onClick={(e) => updateItem(e)}>
            Buy
          </button>
        </div>
      );
    } else {
      return (
        <>
          <div>
            <p>{item.name}</p>
            <p>
              {item.quantity} {item.unit}
            </p>
            <p>Purchased!</p>
          </div>
        </>
      );
    }
  };

  return <>{getListItem(item)}</>;
}

export default Item;
