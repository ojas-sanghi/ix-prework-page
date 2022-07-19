import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import TaskInput from "./components/TaskInput";
import TaskTable from "./components/TaskTable";

export default function App() {
  return (
    <div className="container mt-4">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <div>Our simple task list</div>

        <TaskInput></TaskInput>
        <TaskTable></TaskTable>
      </div>
    </div>
  );
}
