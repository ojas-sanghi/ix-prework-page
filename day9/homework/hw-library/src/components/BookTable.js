import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function BookTable(props) {

  function onBookRemove(book)
  {
    props.onBookRemove(book);
  }

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <button onClick={(e) => {onBookRemove(book)}} className="btn btn-primary btn-sm">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
