import React from "react";
import CalculateDays from "../CalculateDays";
import TaskBar from "./TaskBar";

export default function Upcoming(props) {
  const upcomingTasks = props.data.filter((task) => {
    return task["done"] !== 1 && CalculateDays(task) >=1;
  });

  upcomingTasks.sort((date1, date2) =>new Date(date1["deadline"]) - new Date(date2["deadline"]));

  function renderUpcomingTasks() {
    if (upcomingTasks.length === 0) {
      return <div className="task-list list-border">no tasks!</div>;
    } else {
      return (
        upcomingTasks.map((task, index) => {
          return (
            <TaskBar
              key={index}
              id={task._id}
              taskItem={task}
              onDelete={props.delete}
              onDone={props.done}
            />
          );
        })
      );;
    }
  }

  return (
    <div className="upcoming-tasks col-lg-6 p-2 mb-4">
      <h1 className="title">Upcoming tasks</h1>
      <div className="board scroll upcoming-board">
        <ul className="m-4 p-0">
          {renderUpcomingTasks()}
        </ul>
      </div>
    </div>
  );
}