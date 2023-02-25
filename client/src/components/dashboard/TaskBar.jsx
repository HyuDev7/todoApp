import React from "react";
import DayLeftRender from "../DayLeftRender";

function TaskBar(props) {
  function handleDelete() {
    console.log("delete function is called!!");
    props.onDelete(props.taskItem._id);
  }

  function handleDone() {
    console.log("done function was called!!");
    props.onDone(props.taskItem._id);
  }

  const target = "multiCollapse" + props.id
  // console.log(typeof target)

  return (
    <div className="task-list list-border  ">
      <div className="list-border d-flex">
        <div className="deadline list-border">{props.taskItem.deadline}</div>
        <div className="content list-border">{props.taskItem.title}</div>
        {DayLeftRender(props.taskItem)}

        {/* collapse button */}
        <button
          className="btn btn-info btn-sm text-light list-border collapse-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#"+target}
          aria-expanded="false"
          aria-controls={"#"+target}
        >
          detail
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

      <div className="collapse multi-collapse" id={target}>
        <div className=" my-3 card card-body list-border">{props.taskItem.content}</div>
      </div>
    </div>
  );
}

export default TaskBar;