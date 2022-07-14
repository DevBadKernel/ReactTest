import React, { Component } from "react";
import './style.css';
import InputTask from '../Input'
import List from "../List";

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'',
            complete:[],
            incomplete:[]
        }
    }

changeValue = (newValue) => {
    this.setState({value:newValue})
}

addToList = () => {
    let newList = [...this.state.incomplete];
    newList.push(this.state.value);
    this.setState({value:'', incomplete:newList});
}   

completeTask = (task) => {
    if(this.state.incomplete.includes(task)){
        let newIncomplete = [...this.state.incomplete];
        let posTask = newIncomplete.indexOf(task);
        newIncomplete.splice(posTask, 1);
        let newComplete = [...this.state.complete];
        newComplete.push(task);
        this.setState({complete:newComplete, incomplete:newIncomplete});
    }
}

deleteTask = (task) => {
    if(this.state.complete.includes(task)){
        let newComplete = [...this.state.complete];
        let posTask = newComplete.indexOf(task);
        newComplete.splice(posTask, 1);
        this.setState({complete:newComplete});
    }
}

    render() {
        return (
            <div id="lista">
                <h1>La lista de {this.props.name}</h1>
                <div className='separador'></div>
                <InputTask value={this.state.value} changeValue={this.changeValue} addToList={this.addToList} />
                <div id="listas">
                    <List title="Incompleted" elements = {this.state.incomplete} completeTask={this.completeTask} />
                    <div id="separadorVertical"></div>
                    <List title="Completed" elements={this.state.complete} completed={true} deleteTask={this.deleteTask} />
                </div>
            </div>
        )
    }
}