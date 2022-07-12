import React from "react";
import './style.css';

const ListElement = ({taskName, completed}) => {
    return (
        <div id="element">
            <div id="checkbox" >{completed && <div id="crusesita"/>}</div>
            <div id="taskName" className={completed ? "tachado" : null}>{taskName}</div>
        </div>
    )
}

export default ListElement;