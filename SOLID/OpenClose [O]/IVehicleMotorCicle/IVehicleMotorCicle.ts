export default interface IVehicle {
  startVehicle: () => void;
  configure: (color: string, year: number, engine: number) => void;
}
