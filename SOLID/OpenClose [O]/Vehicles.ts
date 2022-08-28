export default class Vehicles {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {}
  startVehicle(): void {
    console.log("Ligando os motores");
  }
}

