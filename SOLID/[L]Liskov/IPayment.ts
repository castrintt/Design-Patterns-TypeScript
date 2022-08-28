export default interface IPayment {
  validate: () => void;
  collectPayment: () => void;
}
