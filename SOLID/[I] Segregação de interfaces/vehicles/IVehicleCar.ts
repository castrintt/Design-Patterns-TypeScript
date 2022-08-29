export default interface IVehicleCar {
  startVehicle(): void;
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void;
}
