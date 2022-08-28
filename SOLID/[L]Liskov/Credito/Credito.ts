import NubankCard from "../NubankCard/NubankCard";

export default class Credito extends NubankCard {
  validate(): void {
    console.log("Verificando Limite");
  }
}
