import React, { useEffect, useState } from "react";
import Upcoming from "./dashboard/Upcoming.jsx";
import Greeting from "./dashboard/Greeting.jsx";
// import Today from "./dashboard/Today.jsx";
import CreateArea from "./dashboard/CreateArea.jsx";
import DayLeftRender from "./DayLeftRender.jsx";
// import Done from "./dashboard/Done.jsx";
// import Over from "./dashboard/Over.jsx";

export default function Dashboard() {
  // const [tasks, setTasks] = useState([
  //   {
  //     deadline: "2023-2-1",
  //     title: "Prototype",
  //     content: "make a prototype",
  //     done: 0,
  //     unique: 0,
  //   },
  //   {
  //     deadline: "2023-1-31",
  //     title: "plan",
  //     content: "do it",
  //     done: 0,
  //     unique: 1,
  //   },
  //   {
  //     deadline: "2023-7-12",
  //     title: "tactics",
  //     content: "right now",
  //     done: 0,
  //     unique: 2,
  //   },
  //   {
  //     deadline: "2023-1-2",
  //     title: "memo",
  //     content: "write it",
  //     done: 0,
  //     unique: 3,
  //   },
  //   {
  //     deadline: "2023-9-10",
  //     title: "note",
  //     content: "buy a notebooks",
  //     done: 0,
  //     unique: 4,
  //   },
  //   {
  //     deadline: "2023-1-13",
  //     title: "note",
  //     content: "buy a notebooks",
  //     done: 0,
  //     unique: 5,
  //   },
  // ]);

  // const [finishedTasks, setFinishedTasks] = useState([]);
  
  //tasks contains a whole data from the database
  // const [tasks, setTasks] = useState([]);

  //This method will add done flag
  // function doneTasks(recevedUnique) {
  //   var doneTask = tasks.filter((taskItem, index) => {
  //     return taskItem["unique"] === recevedUnique;
  //   });

  //   doneTask[0]["done"] = 1;

  //   setFinishedTasks((prevFinishedTasks) => {
  //     return [...prevFinishedTasks, doneTask[0]];
  //   });

  //   deleteTasks(recevedUnique);
  // }

  //This method fetches the tasks from the database
  // useEffect(() =>{
  //   //check argument
  //   // console.log("this is for checking argument of use effedt");
  //   // console.log(a);

  //    async function getTasks() {
  //     console.log("here is inside of get tasks")
  //     const response =  await fetch("http://localhost:5000/record");
  //     //check response obj
  //     console.log("this is below res")
  //     console.log(response);

  //     if (!response.ok) {
  //       const message = `an error occurred : ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }
  //     const tasks =response.json();
  //     console.log(tasks);
  //     //check
  //     // console.log("this is for checking response.json()")
  //     // console.log(response.json());

  //     setTasks(tasks);
  //   }

  //    getTasks();
  //   //  console.log("get tasks func called")
  //    return;   
  // },
  // [tasks.length]);

  //This method will delete a task
  // async function deleteTasks(id) {
  //   await fetch(`http://localhost:5000/${id}`, {
  //     method: "DELETE"
  //   });

  //   const newTasks = tasks.filter((el) => el.id !== id);
  //   setTasks(newTasks);
  // }

  //This method will add a task
  // async function addTask(newTask) {
  //   setTasks((prevTasks) => {
  //     return [...prevTasks, newTask];
  //   });
  // }

  return (
    <div className="container-fluid background p-6">
      <div className="container px-6">
        <div className="row" data-masonry='{"percentPosition": true }'>
          {/* <Sidebar /> */}
          <Greeting />
          {/* <Today
            data={tasks}
            day_left={DayLeftRender} 
            delete={deleteTasks}
            done={doneTasks} 
            /> */}
          <CreateArea
            day_left={DayLeftRender}
            // delete={deleteTasks}
          />
          <Upcoming
            // data={tasks}
            day_left={DayLeftRender}
            // delete={deleteTasks}
            // done={doneTasks}
          />
          {/* <Done data={finishedTasks} /> */}
          {/* <Over data={tasks} delete={deleteTasks} done={doneTasks} /> */}
        </div>
      </div>
    </div>
  );
}
