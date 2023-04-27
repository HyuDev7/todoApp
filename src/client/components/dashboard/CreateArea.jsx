import React, { useState } from "react";

export default function CreateArea(props) {
  const [task, setTask] = useState({
    deadline: "",
    title: "",
    content: "",
    done: 0,
  });

  //This function will handle the change of form content.
  function handleChange(value) {
    return setTask((prev) => {
      return { ...prev, ...value };
    });
  }

  //This function will handle the submission.
  async function onClick(e) {
    const newTask = task;
    // console.log(newTask);
    try {
      const response = await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        const message = `an error occurred : ${response.statusText}`;
        window.alert(message);
        return;
      }
    } catch (error) {
      window.alert(error);
      return;
    }
    props.onAdd();

    setTask({
      deadline: "",
      title: "",
      content: "",
      done: 0,
    });

    e.preventDefault();
  }

  return (
    <div className="create-area col-lg-6 p-2 mb-4">
      <h1 className="title">Add your new task!</h1>
      <form className="board p-4 m-0">
        <div className="task-list list-border d-flex  align-items-center">
          <input
            type="date"
            className="deadline list-border"
            onChange={(e) => handleChange({ deadline: e.target.value })}
            name="deadline"
            value={task.deadline}
          />
          <input
            type="text"
            className="content list-border"
            onChange={(e) => handleChange({ title: e.target.value })}
            name="title"
            value={task.title}
            placeholder="title"
          />
          {props.day_left(task)}
        </div>
        <textarea
          name="content"
          onChange={(e) => handleChange({ content: e.target.value })}
          value={task.content}
          placeholder="take a note or subtasks"
          rows="3"
        ></textarea>
        <button
          onClick={onClick}
          type="button"
          className="btn btn-dark list-border"
        >
          Add
        </button>
      </form>
    </div>
  );
}
