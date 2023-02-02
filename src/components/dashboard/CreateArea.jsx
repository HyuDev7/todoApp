import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    deadline: "",
    title: "",
    content: "",
    done: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    // console.log(note);
  }

  function submitNote(event) {
    props.addData(note);
    setNote({
      deadline: "",
      title: "",
      content: "",
      done: 0,
    });
    event.preventDefault();
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
            onChange={handleChange}
            name="deadline"
            value={note.deadline}
            placeholder="yyyy-mm-dd"
          />
          <input
            className="content list-border"
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="title"
          />
          {renderLeftDays(note)}
          {/* { console.log("this is under function")}
          {console.log(note)} */}
        </div>
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="take a note"
          rows="3"
        ></textarea>
        <button onClick={submitNote} type="button" className="btn btn-dark list-border">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
