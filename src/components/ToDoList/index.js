import React, { Component } from "react";
import './style.css';
import InputTask from '../Input'
import List from "../List";

export default class ToDoList extends Component {
    render() {
        let incomplete = ["comprar pan", "hacer la compra", "comprar cebollas"];
        let completed = ["limpiar la casa", "hacer los baños", "poner de comer al perro"];
        return (
            <div id="lista">
                <h1>La lista de {this.props.name}</h1>
                <div className='separador'></div>
                <InputTask />
                <div id="listas">
                    <List title="Incompleted" elements = {incomplete} />
                    <div id="separadorVertical"></div>
                    <List title="Completed" elements={completed} completed={true}/>
                </div>
            </div>
        )
    }
}