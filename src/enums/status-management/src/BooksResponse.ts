import { Book } from "./Book";

export interface BooksResponse {
  count: number;
  results: Book[];
}
