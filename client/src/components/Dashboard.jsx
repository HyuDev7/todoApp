import React, { useState } from "react";
import Upcoming from "./dashboard/Upcoming.jsx";
import Greeting from "./dashboard/Greeting.jsx";
import Today from "./dashboard/Today.jsx";
import CreateArea from "./dashboard/CreateArea.jsx";
import DayLeftRender from "./DayLeftRender.jsx";
import Done from "./dashboard/Done.jsx";
import Over from "./dashboard/Over.jsx";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      deadline: "2023-2-1",
      title: "Prototype",
      content: "make a prototype",
      done: 0,
      unique: 0,
    },
    {
      deadline: "2023-1-31",
      title: "plan",
      content: "do it",
      done: 0,
      unique: 1,
    },
    {
      deadline: "2023-7-12",
      title: "tactics",
      content: "right now",
      done: 0,
      unique: 2,
    },
    {
      deadline: "2023-1-2",
      title: "memo",
      content: "write it",
      done: 0,
      unique: 3,
    },
    {
      deadline: "2023-9-10",
      title: "note",
      content: "buy a notebooks",
      done: 0,
      unique: 4,
    },
    {
      deadline: "2023-1-13",
      title: "note",
      content: "buy a notebooks",
      done: 0,
      unique: 5,
    },
  ]);

  const [finishedTasks, setFinishedTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }

  function deleteTasks(recevedUnique) {
    setTasks((prevTasks) => {
      return prevTasks.filter((taskItem, index) => {
        return taskItem["unique"] !== recevedUnique;
      });
    });
  }

  function doneTasks(recevedUnique) {
    var doneTask = tasks.filter((taskItem, index) => {
      return taskItem["unique"] === recevedUnique;
    });

    doneTask[0]["done"] = 1;

    setFinishedTasks((prevFinishedTasks) => {
      return [...prevFinishedTasks, doneTask[0]];
    });

    deleteTasks(recevedUnique);
  }

  function deleteDone(recevedUnique){
    setFinishedTasks((prevTasks) => {
      return prevTasks.filter((taskItem, index) => {
        return taskItem["unique"] !== recevedUnique;
      });
    });
  }

  function undo(recevedUnique){
    var undoTask = finishedTasks.filter((taskItem, index) => {
      return taskItem["unique"] === recevedUnique;
    });
    console.log(undoTask);
    undoTask[0]["done"] = 0;

    setTasks((prevFinishedTasks) => {
      return [...prevFinishedTasks, undoTask[0]];
    });

    deleteDone(recevedUnique);
  }

  return (
    <div className="container-fluid background p-6">
      <div className="container px-6">
        <div className="row" data-masonry='{"percentPosition": true }'>
          {/* <Sidebar /> */}
          <Greeting />
          <Today
            data={tasks}
            day_left={DayLeftRender} 
            delete={deleteTasks}
            done={doneTasks} 
            />
          <CreateArea
            day_left={DayLeftRender}
            addData={addTask}
            delete={deleteTasks}
          />
          <Upcoming
            data={tasks}
            day_left={DayLeftRender}
            delete={deleteTasks}
            done={doneTasks}
          />
          <Done 
            data={finishedTasks}
            delete={deleteDone}
            undo={undo} />
          <Over data={tasks} delete={deleteTasks} done={doneTasks} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
