import React from "react";

function DoneTaskBar(props){
    return (
        <div className="task-list list-border d-flex ">
          <div className="deadline list-border">{props.doneTask.deadline}</div>
          <div className="content list-border">{props.doneTask.content}</div>
          <div className="left-day expired-day list-border">Done!!</div>
        </div>
      );
}

export default DoneTaskBar;