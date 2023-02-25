import React from "react";
import CalculateDifferenceDays from "../CalculateDifferenceDays";
import TaskBar from "./TaskBar";

function Upcoming(props) {

  const upcomingTasks = props.data.filter((task) => {
    return task["done"] !== 1 && CalculateDifferenceDays(task) >=1;
  });

  //sorting tasks
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
              id={"up"+index.toString()}
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
    <div className="upcoming-tasks col-sm-6 col-lg-6 p-2">
      <h1 className="title">Upcoming tasks</h1>
      <div className="board scroll upcoming-board">
        <ul className="m-4 p-0">
          {renderUpcomingTasks()}
        </ul>
      </div>
    </div>
  );
}

export default Upcoming;
