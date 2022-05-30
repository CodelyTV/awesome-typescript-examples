import { BooksResponse } from "./BooksResponse";

export async function getBooks(): Promise<BooksResponse> {
  return fetch("https://gutendex.com/books").then((response) =>
    response.json()
  );
}
