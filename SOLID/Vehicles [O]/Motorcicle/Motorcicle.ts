import IVehicle from "../IVehicleMotorCicle/IVehicleMotorCicle";

export default class Motorcycle implements IVehicle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }
  startVehicle(): void {
    console.log("INICIOU A MOTO");
  }
  configure(color: string, year: number, engine: number): void {
    console.log("MOTO LIGADA");
  }
}
