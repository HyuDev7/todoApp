import React, { useState } from "react";
// import Sidebar from "../components/Sidebar.jsx";
import Upcoming from "../components/dashboard/Upcoming.jsx";
import Greeting from "../components/dashboard/Greeting.jsx";
// import data from "../data.js";
import Today from "../components/dashboard/Today.jsx";
import CreateArea from "../components/dashboard/CreateArea.jsx";
import DayLeftRender from "../components/DayLeftRender.jsx";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      deadline: "2023-1-30",
      title: "Prototype",
      content: "make a prototype",
    },
    {
      deadline: "2023-1-31",
      title: "plan",
      content: "do it",
    },
    {
      deadline: "2023-7-12",
      title: "tactics",
      content: "right now",
    },
    {
      deadline: "2023-1-2",
      title: "memo",
      content: "write it",
    },
    {
      deadline: "2023-9-10",
      title: "note",
      content: "buy a notebooks",
    },
    {
      deadline: "2023-1-13",
      title: "note",
      content: "buy a notebooks",
    },
  ]);

  function addTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }

  function deleteTasks(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container-fluid background p-6">
      <div className="container px-6">
        <div className="row" data-masonry='{"percentPosition": true }'>
          {/* <Sidebar /> */}
          <Greeting />
          <Today data={tasks} day_left={DayLeftRender} delete={deleteTasks} />
          <CreateArea
            day_left={DayLeftRender}
            addData={addTask}
            delete={deleteTasks}
          />
          <Upcoming
            data={tasks}
            day_left={DayLeftRender}
            delete={deleteTasks}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
