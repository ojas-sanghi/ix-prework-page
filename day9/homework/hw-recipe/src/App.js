import React, { useEffect, useState } from "react";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";

import service from "./services/book.service";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  useEffect(() => {
    fetchBooks();
  }, [])

  const [books, setBooks] = useState([]);

  async function fetchBooks()
  {
    try {
      const books = await service.readBooks();
      setBooks(books);
    } catch (err)
    {
      console.log(err);
    }
  }

  function onBookCreated(book) {
    try {
      service.createBook(book);
      let newBooks = books.concat([book]);
      setBooks(newBooks);
    } catch (err) {
      console.log(err);
    }
  }

  function onBookRemove(book) {
    try {
      service.deleteBook(book);

      let newBooks = books.filter((b) => {
        return b.id != book.id;
      });
      setBooks(newBooks);
    } catch (err) {}
  }

  return (
    <div>
      <div className="container mt-5">
        <h1>Add Book</h1>
        <BookInput onBookCreated={onBookCreated}></BookInput>
        <BookTable books={books} onBookRemove={onBookRemove}></BookTable>
      </div>
    </div>
  );
}
