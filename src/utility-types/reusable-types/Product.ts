import { Category } from "./Category";

export type Product = Readonly<{
  id: string;
  name: string;
  price: number;
  category: Category;
}>;

/*
Equivalent to

type Product = {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly category: Category;
}
*/
