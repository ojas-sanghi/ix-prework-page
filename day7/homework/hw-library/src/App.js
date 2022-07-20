import React, { useState } from "react";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  const [books, setBooks] = useState([])

  function onBookCreated(book)
  {
    let newBooks = books.concat([book]);
    setBooks(newBooks);
  }

  function onBookRemove(book)
  {
    let newBooks = books.filter((b) => {return b.id != book.id});
    setBooks(newBooks);
  }

  return (
    <div>
      <div className="container mt-5">
        <h1>Add Book</h1>
        <BookInput onBookCreated={onBookCreated}></BookInput>
        <BookTable books={books} onBookRemove={onBookRemove} ></BookTable>
      </div>
    </div>
  );
}
