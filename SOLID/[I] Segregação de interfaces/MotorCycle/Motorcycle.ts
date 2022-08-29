import IVehicleMotorcycle from "../vehicles/IVehicleMotorcycle";

export default class MotorcycleIPrinciple implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine);
  }
  configureMotorcycle(color: string, year: number, engine: number): void {
    console.log("CRIANDO UMA MOTO");
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("Ligando os motores");
  }
}
