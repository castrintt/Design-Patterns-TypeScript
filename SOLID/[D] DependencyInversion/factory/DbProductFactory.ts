import IDbProduct from "../interfaces/IDbProduct";
import Db from "../model/Db";
import MongoDbProduct from "../model/MongoDbProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {
  private static type: Db = Db.MONGODB;
  
  public static create(): IDbProduct {
    if (DbProductFactory.type === Db.MYSQL) {
      return new MySQLProduct();
    } else if (DbProductFactory.type === Db.MONGODB) {
      return new MongoDbProduct();
    } else {
      return new MongoDbProduct();
    }
  }
}
