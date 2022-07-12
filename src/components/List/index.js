import React from "react";
import './style.css';
import ListElement from "../ListElement";

const List = ({title, elements, completed}) => {
    return (
        <div>
            <h3>{title}</h3>
            {elements.map(element =>{
            return <ListElement taskName={element} completed={completed}/> 
        })}
        </div>
    )
}

export default List;