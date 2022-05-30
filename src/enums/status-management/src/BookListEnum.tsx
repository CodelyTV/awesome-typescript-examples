import { useState } from "react";

import { Book } from "./Book";
import { getBooks } from "./getBooks";

const enum Status {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}

export const BookListEnum = () => {
  const [status, setStatus] = useState(Status.INITIAL);
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    setStatus(Status.LOADING);
    try {
      const booksResponse = await getBooks();
      setBooks(booksResponse.results);
      setStatus(Status.SUCCESS);
    } catch {
      setStatus(Status.ERROR);
    }
  };

  return (
    <section>
      <button onClick={loadBooks}>Load books</button>

      {status == Status.LOADING && <p>Loading…</p>}

      {status == Status.SUCCESS && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}

      {status == Status.ERROR && <p>Something went wrong. Try again</p>}
    </section>
  );
};
