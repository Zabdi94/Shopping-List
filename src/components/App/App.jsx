import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    let [itemList, setItemList] = useState([]);

    //on load, get items
    useEffect(() => {
        getItems()
    }, []); 

    const getItems = () => {
        axios.get('/items')
            .then(response => {
                setItemList(response.data)
            })
            .catch(err => {
                alert('Error getting items'); 
                console.log(err);
            })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
