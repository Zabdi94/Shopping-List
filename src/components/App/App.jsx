import React from "react";

import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<ShoppingForm />
			</main>
		</div>
	);
}

export default App;
