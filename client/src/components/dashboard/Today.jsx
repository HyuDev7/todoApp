import React from "react";
import CalculateDifferenceDays from "../CalculateDifferenceDays";
import TaskBar from "./TaskBar";

function Today(props) {
  function todayTasks() {
    const passed_data = props.data;
    var today = new Date();
    today.setHours(0,0,0)
    // const today_time = today.getTime();

    const result = passed_data.filter((task) => {

      return (CalculateDifferenceDays(task) === 0 ? task : null)

      // const deadline = new Date(task.deadline);
      // const deadline_time = deadline.getTime();
      // console.log("this is today's time" + today)
      // console.log("this is deadline time" + deadline)
      // return today_time === deadline_time;
      // return deadline === today;
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
        console.log(filtered_task)
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
