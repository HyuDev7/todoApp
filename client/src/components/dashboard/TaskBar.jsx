import React from "react";
import DayLeftRender from "../DayLeftRender";

function TaskBar(props) {
  function handleDelete() {
    console.log("delete function is called!!");
    props.onDelete(props.taskItem["unique"]);
  }

  function handleDone() {
    console.log("done function was called!!");
    props.onDone(props.taskItem["unique"]);
  }

  return (
    <div className="task-list list-border  ">
      <div className="list-border d-flex">
        <div className="deadline list-border">{props.taskItem.deadline}</div>
        <div className="content list-border">{props.taskItem.title}</div>
        {DayLeftRender(props.taskItem)}

        {/* collapse button */}
        <button
          className="btn btn-primary list-border collapse-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          test
        </button>

        {/*  */}
        <button
          onClick={handleDone}
          type="button"
          className="btn btn-dark list-border done-button btn-sm"
        >
          Done
        </button>
        <button
          onClick={handleDelete}
          type="button"
          className="btn btn-dark list-border delete-button btn-sm"
        >
          Delete
        </button>
      </div>

      <div className="collapse" id="collapseExample">
        <div className=" my-3 card card-body list-border">{props.taskItem.content}</div>
      </div>
    </div>
  );
}

export default TaskBar;
