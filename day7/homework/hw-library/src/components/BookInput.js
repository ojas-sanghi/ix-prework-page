import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Book} from "../models/book";

export default function BookInput(props) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  function onFormSubmitted(event)
  {
    event.preventDefault();

    const book = new Book(title, author, isbn);
    props.onBookCreated(book);
    setTitle("");
    setAuthor("");
    setIsbn("");
  }

  return (
    <div>
      <form onSubmit={onFormSubmitted}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            className="form-control"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <input
            className="form-control"
            value={isbn}
            onChange={(e) => {
              setIsbn(e.target.value);
            }}
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary">Submit</button>
        </div>
      </form>
    </div>
  );
}
