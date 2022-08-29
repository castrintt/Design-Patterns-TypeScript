import IDbProduct from "../interfaces/IDbProduct";

export default class MySQLProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MySQL: Exibindo dados do ${productId}`;
  }
}
