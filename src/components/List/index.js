import React from "react";
import "./style.css";
import ListElement from "../ListElement";

const List = ({ title, elements, completed, completeTask, deleteTask }) => {
  return (
    <div>
      <h3>{title}</h3>
      {elements.map((element, index) => {
        return (
          <ListElement
            key={`${element}${index}`}
            taskName={element}
            completed={completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default List;
