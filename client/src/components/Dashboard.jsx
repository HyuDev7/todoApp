import {useState, useEffect} from "react";
import Upcoming from "./dashboard/Upcoming.jsx";
import Greeting from "./dashboard/Greeting.jsx";
import Today from "./dashboard/Today.jsx";
import CreateArea from "./dashboard/CreateArea.jsx";
import DayLeftRender from "./DayLeftRender.jsx";
import Done from "./dashboard/Done.jsx";
import Over from "./dashboard/Over.jsx";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([])

  useEffect(() =>{
     async function getTasks() {
      try{
        const response =  await fetch("http://localhost:5000/record");

        if (!response.ok) {
          const message = `an error occurred : ${response.statusText}`;
          window.alert(message);
          return;
        }
        
        //get multiple document and put them into array
        const record = await response.json()      
        setTasks(record);
        console.log(tasks)

      }catch(error){
        console.log(error.message);
      }
    }

     getTasks();
     return;   
  },
  [tasks.length]);
  

  // This method will add done flag
  async function addDone(id) {
    // var doneTask = tasks.filter((taskItem, index) => {
    //   return taskItem["unique"] === recevedUnique;
    // });

    // doneTask[0]["done"] = 1;

    // setFinishedTasks((prevFinishedTasks) => {
    //   return [...prevFinishedTasks, doneTask[0]];
    // });

    // deleteTasks(recevedUnique);
    
    console.log("here is on addDone")
    const idString = id.toString();
    const response = await fetch(`http://localhost:5000/update/${idString}`,{
      method: "POST",
     });

     //this logic will display a single updated task
     const updatedTask = await response.json()
     console.log("here is under updatedTask")
     console.log(updatedTask.value)
     setTasks((prev)=>{
      return [...prev, updatedTask.value]
     })

  }

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
  //   return setTasks((prevTasks) => {
  //     return [...prevTasks, newTask];
  //   });
  // }

  return (
    <div className="container-fluid background p-6">
      <div className="container px-6">
        <div className="row" data-masonry='{"percentPosition": true }'>
          {/* <Sidebar /> */}
          <Greeting />
          <Today
            data={tasks}
            day_left={DayLeftRender} 
            // delete={deleteTasks}
            // done={doneTasks} 
            />
          <CreateArea
            day_left={DayLeftRender}
            // delete={deleteTasks}
          />
          <Upcoming
            data={tasks}
            day_left={DayLeftRender}
            // delete={deleteTasks}
            done={addDone}
          />
          <Done data={tasks} />
          <Over 
            data={tasks}
            // delete={deleteTasks} 
            done={addDone} 
          />
        </div>
      </div>
    </div>
  );
}
