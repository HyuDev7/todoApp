import React from "react";
import CalculateDays from "../CalculateDays";
import TaskBar from "./TaskBar";

function Over(props) {
  const overTasks = props.data.filter((task) => {
    return CalculateDays(task) < 0 && task["done"] !== 1;
  });

  //Sorting tasks
  overTasks.sort(
    (date1, date2) => new Date(date1["deadline"]) - new Date(date2["deadline"])
  );

  function renderOverTasks() {
    if (overTasks.length === 0) {
      return <div className="task-list list-border">no tasks!</div>;
    } else {
      return overTasks.map((task, index) => {
        return (
          <TaskBar
            key={index}
            id={index}
            taskItem={task}
            onDelete={props.delete}
            onDone={props.done}
          />
        );
      });
    }
  }

  return (
    <div className="over-tasks col-lg-6 p-2 mb-4">
      <h1 className="title">Over tasks</h1>
      <div className="board scroll upcoming-board">
        <ul className="m-4 p-0">{renderOverTasks()}</ul>
      </div>
    </div>
  );
}

export default Over;
