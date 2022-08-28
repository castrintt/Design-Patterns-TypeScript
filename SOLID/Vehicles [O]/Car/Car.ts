import IVehicle from "../IVehicle/IVehicle";

export default class Car implements IVehicle {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }
  startVehicle(): void {
    console.log("INICIOU");
  }
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log("Ligando os motores");
  }
}
