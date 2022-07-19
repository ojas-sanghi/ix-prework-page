import React from "react";

export default function TaskInput() {
  return (
    <div className="mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
        />
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
    </div>
  );
}
