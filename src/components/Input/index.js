import React from "react";
import './style.css';

const InputTask = ({value, changeValue, addToList}) => {
    const handleChange = (event) => {
        changeValue(event.target.value);
    }
    const addElement = () => {
        console.log("hola");
        addToList();
    }

    return (
        <div id="inputContainer">
            <input type="text" onChange={handleChange} value={value}></input>
            <button id="anadir" onClick={addElement}>Añadir</button>
        </div>
    )
}

export default InputTask;