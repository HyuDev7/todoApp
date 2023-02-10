import React from "react";
import DayLeftRender from "../DayLeftRender";

export default function TaskBar(props) {

    function handleDelete(){
        console.log("delete function is called!!");
        props.onDelete(props.taskItem._id);
    }

    function handleDone(){
      console.log("done function was called!!");
      console.log(props.taskItem._id)
      props.onDone(props.taskItem._id)
    }

  return (
    <div className="task-list list-border d-flex ">
      <div className="deadline list-border">{props.taskItem.deadline}</div>
      <div className="content list-border">{props.taskItem.title}</div>
      {DayLeftRender(props.taskItem)}
      <button onClick={handleDone} type="button" className="btn btn-dark list-border done-button btn-sm">
        Done
      </button>
      <button onClick={handleDelete} type="button" className="btn btn-dark list-border delete-button btn-sm">
        Delete
      </button>
    </div>
  );
}
