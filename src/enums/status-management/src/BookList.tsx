import { useState } from "react";

import { Book } from "./Book";
import { getBooks } from "./getBooks";

export const BookList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    try {
      const booksResponse = await getBooks();
      setBooks(booksResponse.results);
      setIsSuccess(true);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <button onClick={loadBooks}>Load books</button>

      {isLoading && <p>Loading…</p>}

      {isSuccess && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}

      {isError && <p>Something went wrong. Try again</p>}
    </section>
  );
};
