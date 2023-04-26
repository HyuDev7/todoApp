import React, { useState, useEffect } from "react";
import Upcoming from "./dashboard/Upcoming.jsx";
import Greeting from "./dashboard/Greeting.jsx";
import Today from "./dashboard/Today.jsx";
import CreateArea from "./dashboard/CreateArea.jsx";
import DayLeftRender from "./DayLeftRender.jsx";
import Done from "./dashboard/Done.jsx";
import Over from "./dashboard/Over.jsx";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  async function getTasks() {

    try {
      const response = await fetch("http://localhost:5000/record");

      if (!response.ok) {
        const message = `an error occurred : ${response.statusText}`;
        window.alert(message);
        return;
      }

      //get multiple document and put them into array
      const record = await response.json();
      setTasks(record);
      console.log(tasks);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getTasks();
  }, [tasks.length]);

  // This method will add done flag
  async function addDone(id) {
    const idString = id.toString();
    await fetch(`http://localhost:5000/update/${idString}`, {
      method: "POST",
    });
    getTasks();
  }

  //This method will delete a task
  async function deleteTasks(id) {
    const idString = id.toString();
    await fetch(`http://localhost:5000/${idString}`, {
      method: "DELETE",
    }).then((res) => console.log(res));
    console.log("getTask is colled");
    getTasks();
  }

  // This method will add a task
  function addTask() {
    getTasks();
  }

  //This method will undo done flag
  async function undoDone(id) {
    const idString = id.toString();
    const response = await fetch(
      `http://localhost:5000/update/undo/${idString}`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
        const message = `an error occurred : ${response.statusText}`;
        window.alert(message);
        return;
      }

    getTasks();
  }

  return (
    <div className="container-fluid background p-6">
      <div className="container px-6">
        <div className="row">
          {/* <Sidebar /> */}
          <Greeting />
          <Today
            data={tasks}
            day_left={DayLeftRender}
            delete={deleteTasks}
            done={addDone}
          />
          <CreateArea
            day_left={DayLeftRender}
            delete={deleteTasks}
            onAdd={addTask}
          />
          <Upcoming
            data={tasks}
            day_left={DayLeftRender}
            delete={deleteTasks}
            done={addDone}
          />
          <Done data={tasks} delete={deleteTasks} undo={undoDone} />
          <Over data={tasks} delete={deleteTasks} done={addDone} />
        </div>
      </div>
    </div>
  );
}
