import IDbProduct from "../interfaces/IDbProduct";

export default class MongoDbProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MongoDB: Exibindo dados do produto ${productId}`;
  }
}
