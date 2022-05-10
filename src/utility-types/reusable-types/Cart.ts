import { Product } from "./Product";

type CartProduct = Pick<Product, "id" | "price">;

export class Cart {
  private products: CartProduct[] = [];

  add(product: CartProduct): void {
    this.products = this.products.concat(product);
  }

  total(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }
}
