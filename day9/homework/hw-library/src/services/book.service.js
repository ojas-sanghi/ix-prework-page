import { firestore } from "../firebase/firebase";

import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  getDocs,
} from "firebase/firestore";
import { Book } from "../models/book";

class BookService {
  async createBook(book) {
    const collectionRef = collection(firestore, "books");
    const docRef = await addDoc(collectionRef, {
      author: book.author,
      isbn: book.isbn,
      title: book.title
    })
    book.id = docRef.id;
    return book;
  }

  async readBooks() {
    const collectionRef = collection(firestore, "books");
    const q = query(collectionRef);
    const docs = await getDocs(q);

    const books = [];

    docs.forEach(doc => {
      const data = doc.data();
      const newBook = new Book(
        doc.id,
        data.title,
        data.author,
        data.isbn
      );
      books.push(newBook);
    });
    return books;
  }

  async deleteBook(book) {
    const docRef = doc(firestore, `books/${book.id}`)
    deleteDoc(docRef);
  }
}

const service = new BookService();
export default service;
