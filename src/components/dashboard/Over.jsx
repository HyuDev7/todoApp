import React from "react";
import CalculateDifferenceDays from "../CalculateDifferenceDays";
import TaskBar from "./TaskBar";

function Over(props) {

    const overTasks = props.data.filter((task) => {
        return CalculateDifferenceDays(task) < 0;
      });
      
    //Sorting tasks
    overTasks.sort((date1, date2) =>new Date(date1["deadline"]) - new Date(date2["deadline"]));

  return (
    <div className="upcoming-tasks col-sm-6 col-lg-6 p-2">
      <h1 className="title">Over tasks</h1>
      <div className="board scroll upcoming-board">
        <ul className="m-4 p-0">
        {overTasks.map((task, index) => {
          return (
            <TaskBar
              key={index}
              id={index}
              taskItem={task}
              onDelete={props.delete}
              onDone={props.done}
            />
          );
        })}
        </ul>
      </div>
    </div>
  );
}

export default Over;
