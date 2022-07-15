class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UserInterface {
  constructor() {
    this.titleInput = document.getElementById("title-input");
    this.authorInput = document.getElementById("author-input");
    this.isbnInput = document.getElementById("isbn-input");
    this.submitBtn = document.getElementById("button");
    this.tableBody = document.getElementById("table-body");

    this.books = [];
  }

  bindEventListeners() {
    this.submitBtn.addEventListener("click", (e) => {
      this.handleButtonClick(e);
    });
  }

  handleButtonClick(event) {
    let newBook = new Book(
      this.titleInput.value,
      this.authorInput.value,
      this.isbnInput.value
    );
    this.books.push(newBook);

      this.titleInput.value = '';
      this.authorInput.value = '';
      this.isbnInput.value = '';

    this.populateBookTable();
  }

  populateBookTable() {
    this.tableBody.innerHTML = '';

    for (let book of this.books)
    {
      const newRow = document.createElement("tr");
      const titleCell = document.createElement("td")
      const authorCell = document.createElement("td")
      const isbnCell = document.createElement("td")
      const actionsCell = document.createElement("td")

      titleCell.innerHTML = book.title;
      authorCell.innerHTML = book.author;
      isbnCell.innerHTML = book.isbn;

      newRow.appendChild(titleCell);
      newRow.appendChild(authorCell);
      newRow.appendChild(isbnCell);
      newRow.appendChild(actionsCell);

      this.tableBody.append(newRow);
    }
  }
}

const ui = new UserInterface();
ui.bindEventListeners();