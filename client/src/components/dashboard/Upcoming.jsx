import React, { useEffect, useState } from "react";
// import CalculateDifferenceDays from "../CalculateDifferenceDays";
import TaskBar from "./TaskBar";

function Upcoming(props) {
  const [upcomingTasks, setUpcomingTasks] = useState([

  ]);

  const arr = []

  useEffect(() =>{
    
     async function getTasks() {
      try{
        const response =  await fetch("http://localhost:5000/record");

      if (!response.ok) {
        const message = `an error occurred : ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const tasks = await response.json()

      //wanna change this logic
      arr.push(tasks)
      // console.log(arr)
      setUpcomingTasks(arr);
      console.log(upcomingTasks)

      }catch{
        // console.dir;
      }
    }

     getTasks();
     return;   
  },
  [upcomingTasks.length]);

  // const upcomingTasks = props.data.filter((task) => {
  //   return task["done"] !== 1 && CalculateDifferenceDays(task) >=1;
  // });

  // upcomingTasks.sort((date1, date2) =>new Date(date1["deadline"]) - new Date(date2["deadline"]));

  function renderUpcomingTasks() {
    if (upcomingTasks.length === 0) {
      return <div className="task-list list-border">no tasks!</div>;
    } else {
      return (
        upcomingTasks.map((task, index) => {
          return (
            <TaskBar
              key={index}
              id={index}
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
