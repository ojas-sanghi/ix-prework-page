import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import TaskInput from "./components/TaskInput";
import TaskTable from "./components/TaskTable";

export default function App() {

  const [tasks, setTasks] = useState([]);

  function onTaskCreated(task)
  {
    const newTasks = [];
    for (let t of tasks)
    {
      newTasks.push(t);
    }
    newTasks.push(task);

    setTasks(newTasks);
  }

  function onTaskUpdated(task) 
  {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) 
        return task;
      else
        return t;
    })
    setTasks(updatedTasks);
  }

  function onTaskRemove(task)
  {
    const filteredTasks = tasks.filter((t) => {
      return t.id !== task.id;
    })
    setTasks(filteredTasks);
  }

  return (
    <div className="container mt-4">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <div>Our simple task list</div>

        <TaskInput onTaskCreated={onTaskCreated}></TaskInput>
        <TaskTable tasks={tasks} onTaskRemove={onTaskRemove} onTaskUpdated={onTaskUpdated}></TaskTable>
      </div>
    </div>
  );
}
