import NubankCard from "../NubankCard/NubankCard";

export default class Debito extends NubankCard {
  validate(): void {
    console.log("Validar se há saldo suficiente");
  }
}
