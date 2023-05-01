import React from "react";
import CalculateDays from "../CalculateDays";
import TaskBar from "./TaskBar";

function Today(props) {
  function todayTasks() {
    const passed_data = props.data;
    var today = new Date();
    today.setHours(0,0,0)
    // const today_time = today.getTime();

    const result = passed_data.filter((task) => {
      return (CalculateDays(task) === 0 && task["done"]!==1)
    });

    return result;
  }

  function renderTodayTasks(){
    const todayArray = todayTasks();
    if(todayArray.length === 0){
      return(<div className="task-list list-border">
        no tasks!
      </div>)
    }else{
      return todayArray.map((filtered_task, index) => {
        // console.log(filtered_task)
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
    <div className="today-tasks col-lg-6 mb-4">
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