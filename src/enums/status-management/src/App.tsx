import { BookList } from "./BookList";
import { BookListEnum } from "./BookListEnum";

export function App() {
  return (
    <>
      <h1>Status management!</h1>
      <h3>List with booleans</h3>
      <BookList />

      <h3>List with enum</h3>
      <BookListEnum />
    </>
  );
}
