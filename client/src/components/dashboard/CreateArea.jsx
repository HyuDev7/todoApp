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
    // console.log(note);
  }

  //This function will handle the submission.
  async function onClick(e) {
    //check
    console.log("onClick is called")

    const newTask = {...task};

    const response = await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
    .catch(error =>{
      window.alert(error);
      return;
    });
    const insertedDocument = await response.json()
    console.log(insertedDocument);
    props.onAdd(insertedDocument[0])

    setTask({
      deadline: "",
      title: "",
      content: "",
      done: 0
    });
    
    console.log("prevent default is called")
    e.preventDefault();
  }

function renderLeftDays(note) {
    // console.log("this is in renderFunction: ");
    // console.log(note)
    // console.log()
    const regex = /^[0-9]{4}-([1-9]|1[0-2])-([1-9]|[12][0-9]|3[01])$/;
    if (!regex.test(note.deadline)) {
      // console.log("here is false")
      return <div className="left-day expired-day list-border text-center">-----</div>;
    } else {
      // console.log("here is true")
      return props.day_left(note);
    }
  }

  return (
    <div className="create-area col-sm-6 col-lg-6 p-2">
      <h1 className="title">Add your new task!</h1>
      <form className="board p-4 m-0">
        <div className="task-list list-border d-flex  align-items-center">
          <input
            className="deadline list-border"
            onChange={(e) => handleChange({deadline: e.target.value})}
            name="deadline"
            value={task.deadline}
            placeholder="yyyy-mm-dd"
          />
          <input
            className="content list-border"
            onChange={(e) => handleChange({title: e.target.value})}
            name="title"
            value={task.title}
            placeholder="title"
          />
          {renderLeftDays(task)}
        </div>
        <textarea
          name="content"
          onChange={(e) => handleChange({content: e.target.value})}
          value={task.content}
          placeholder="take a note or subtasks"
          rows="3"
        ></textarea>
        <button onClick={onClick} type="button" className="btn btn-dark list-border">
          Add
        </button>
      </form>
    </div>
  );
}
