import React from "react";
import DayLeftRender from "../DayLeftRender";

function TaskBar(props) {

    function handleDelete(){
        console.log("delete function is called!!")
        props.onDelete(props.id)
    }

  return (
    <div className="task-list list-border d-flex ">
      <div className="deadline list-border">{props.taskItem.deadline}</div>
      <div className="content list-border">{props.taskItem.content}</div>
      {DayLeftRender(props.taskItem)}
      <button onClick={handleDelete} type="button" className="btn btn-dark list-border">
        Delete
      </button>
    </div>
  );
}

export default TaskBar;
