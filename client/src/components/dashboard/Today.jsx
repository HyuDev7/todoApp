import React from "react";
import CalculateDifferenceDays from "../CalculateDifferenceDays";
import TaskBar from "./TaskBar";

function Today(props) {
  //This will help get a document, which deadline is today
  function todayTasks() {
    const passed_data = props.data;
    var today = new Date();
    today.setHours(0,0,0)

    //retrieve document which deadline is today
    const result = passed_data.filter((task) => {
      return (CalculateDifferenceDays(task) === 0 ? task : null)
    });

    return result;
  }

  //This will help render today's area
  function renderTodayTasks(){
    const todayArray = todayTasks();
    // console.log("this is today's log")
    // console.log(todayArray)
    if(todayArray.length === 0){
      return(<div className="task-list list-border">
        no tasks!
      </div>)
    }else{
      return todayArray.map((filtered_task, index) => {
        return (
          <TaskBar
              key={index}
              id={index}
              taskItem={filtered_task}
              onDelete={props.delete}
              onDone={props.done}
          />
        );
      })
    }
  };

  return (
    <div className="today-tasks col-sm-6 col-lg-6">
      <h1 className="title">Today's your tasks</h1>
      <div className="board scroll today-board">
        <ul className="m-4 p-0">
          {renderTodayTasks()}
        </ul>
      </div>
    </div>
  );
}

export default Today;
