import { Product } from "./Product";

type PartialProduct = Pick<Product, "id"> & Partial<Product>;

export interface ProductRepository {
  update(partialProduct: PartialProduct): void;

  save(product: Readonly<Product[]>): void;
}
