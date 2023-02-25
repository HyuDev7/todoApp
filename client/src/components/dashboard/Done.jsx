import React from "react";
// import DoneTaskBar from "./DoneTaskBar";

function DoneTaskBar(props) {
  function handleDelete() {
    // console.log("delete function is called!!");
    props.onDelete(props.doneTask["unique"]);
  }

  function handleUndo(){
    console.log("undo is called");
    console.log(props.doneTask["unique"]);
    props.onUndo(props.doneTask["unique"]);
  }

  const target = "multiCollapse" + props.id;
  console.log(props.doneTask["unique"]);

  return (
    <div className="task-list list-border">
      <div className="list-border d-flex">
        <div className="deadline list-border">{props.doneTask.deadline}</div>
        <div className="content list-border">{props.doneTask.title}</div>
        <div className="left-day expired-day list-border">Done!!</div>
        {/* collapse button */}
        <button
          className="btn btn-info text-light list-border collapse-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + target}
          aria-expanded="false"
          aria-controls={"#" + target}
        >
          test
        </button>
        {/*  */}

        <button
          onClick={handleUndo}
          type="button"
          className="btn btn-dark list-border done-button btn-sm"
        >
          Undo
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
        <div className=" my-3 card card-body list-border">
          {props.doneTask.content}
        </div>
      </div>
    </div>
  );
}

function Done(props) {
  const finishedTasks = props.data.filter((task) => {
    return task["done"] === 1 ;
  });

  function renderDoneTasks() {
    if (finishedTasks.length === 0) {
      return <div className="task-list list-border">no tasks!</div>;
    } else {
      return finishedTasks.map((task, index) => {
        return (
          <DoneTaskBar
            key={index}
            id={"d" + index.toString()}
            doneTask={task}
            onDelete={props.delete}
            onUndo={props.undo}
          />
        );
      });
    }
  }

  return (
    <div className="upcoming-tasks col-sm-6 col-lg-6 p-2">
      <h1 className="title">Done tasks</h1>
      <div className="board scroll upcoming-board">
        <ul className="m-4 p-0">{renderDoneTasks()}</ul>
      </div>
    </div>
  );
}

export default Done;
