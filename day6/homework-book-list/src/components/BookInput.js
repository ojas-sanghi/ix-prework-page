import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function BookInput() {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input id="title-input" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Author</label>
        <input id="author-input" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">ISBN</label>
        <input id="isbn-input" className="form-control" />
      </div>

      <div className="d-grid gap-2">
        <button id="button" type="button" className="btn btn-outline-secondary">
          Submit
        </button>
      </div>
    </div>
  );
}
