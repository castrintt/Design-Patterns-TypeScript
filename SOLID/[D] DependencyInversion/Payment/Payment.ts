import DbProductFactory from "../factory/DbProductFactory";

export default class PaymentSystem  {

  pay(productId: number): void {
    const dbProduct = DbProductFactory.create();
    const product = dbProduct.getProductById(productId);
  }
}
