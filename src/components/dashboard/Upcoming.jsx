import React from "react";
import TaskBar from "./TaskBar";

function Upcoming(props) {
  return (
    <div className="upcoming-tasks col-sm-6 col-lg-6 p-2">
      <h1 className="title">Upcoming tasks</h1>
      <div className="board scroll upcoming-board">
        <ul className="m-4 p-0">
          {props.data.map((task, index) => {
            return (
              <TaskBar
                key={index}
                id={index}
                taskItem={task}
                onDelete={props.delete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Upcoming;
