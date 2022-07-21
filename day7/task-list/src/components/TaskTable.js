import React from "react";

export default function TaskTable(props) {
  
  function toggleTaskComplete(task) {
    task.complete = !task.complete;
    props.onTaskUpdated(task);
  }

  function onTaskRemove(task)
  {
    props.onTaskRemove(task);
  }

  return (
    <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {props.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.complete ? "bi bi-circle-fill" : "bi bi-circle"}</td>
              <td>
                <i className="bi bi-trash"></i>
                <button
                  onClick={(e) => {
                    toggleTaskComplete(task)
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Toggle Complete
                </button>
                <button
                  onClick={(e) => {onTaskRemove(task)}}
                  className="btn btn-primary btn-sm ms-2"
                >
                  Remove Task
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
