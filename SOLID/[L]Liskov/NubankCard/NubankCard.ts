import IPayment from "../IPayment";

export default abstract class NubankCard implements IPayment {
  validate(): void {
    console.log("Validação básica");
  }
  collectPayment(): void {
    console.log("Pagamento realizado");
  }
}
