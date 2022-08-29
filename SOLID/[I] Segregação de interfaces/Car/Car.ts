import IVehicleCar from "../vehicles/IVehicleCar";

export default class CarIPrinciple implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("Ligando os motores");
  }
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `Carro da cor ${color}, ano ${year} motor de ${engine} cavalos e ${seats} assentos`
    );
    this.startVehicle();
  }

}
