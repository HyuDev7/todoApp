import React from "react";
import DoneTaskBar from "./DoneTaskBar";

function Done(props) {
  

  function renderDoneTasks() {
    if (props.data.length === 0) {
      return <div className="task-list list-border">no tasks!</div>;
    } else {
      return props.data.map((task, index) => {
        return(<DoneTaskBar 
         key={index}
         doneTask={task} 
         />)
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