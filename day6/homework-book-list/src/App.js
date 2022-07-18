import React from "react";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <div className="container mt-5">
        <h1>Add Book</h1>
        <BookInput></BookInput>
        <BookTable></BookTable>
      </div>
    </div>
  );
}
