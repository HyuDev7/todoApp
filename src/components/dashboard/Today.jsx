import React from "react";

function Today(props) {
  function todayTasks() {
    const passed_data = props.data;
    var today = new Date();
    const today_time = today.getTime();

    const result = passed_data.filter((task) => {
      const deadline = new Date(task.deadline);
      const deadline_time = deadline.getTime();
      return today_time === deadline_time;
    });
    // console.log(result)
    return result;
  }

  function renderTodayTasks(){
    const todayArray = todayTasks();
    
    if(todayArray.length === 0){
      
      return(<div className="task-list list-border">
        no tasks!
      </div>)
    }else{
      todayTasks(props.data).map((filtered_task, index) => {
        return (
          <div className="task-list list-border d-flex">
            <div className="deadline list-border">
              {filtered_task.deadline}
            </div>
            <div className="content list-border">
              {filtered_task.content}
            </div>
            {props.day_left(filtered_task)}
            <button
              onClick={props.delete}
              type="button"
              className="btn btn-dark list-border"
            >
              Delete
            </button>
          </div>
        );
      })
    }
  }

  return (
    <div className="today-tasks col-sm-6 col-lg-6">
      <h1 className="title">Today's your tasks</h1>
      <div className="board scroll today-board">
        <ul className="m-4 p-0">
          {renderTodayTasks()
            /* {todayTasks(props.data).map((filtered_task, index) => {
            return (
              <div className="task-list list-border d-flex">
                <div className="deadline list-border">
                  {filtered_task.deadline}
                </div>
                <div className="content list-border">
                  {filtered_task.content}
                </div>
                {props.day_left(filtered_task)}
                <button
                  onClick={props.delete}
                  type="button"
                  className="btn btn-dark list-border"
                >
                  Delete
                </button>
              </div>
            );
          })} */
          }
        </ul>
      </div>
    </div>
  );
}

export default Today;
