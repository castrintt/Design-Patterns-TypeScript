"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./SingleRO[S]/Client"));
const Notify_1 = __importDefault(require("./SingleRO[S]/Notify/Notify"));
const Car_1 = __importDefault(require("./OpenClose [O]/Car/Car"));
const Motorcicle_1 = __importDefault(require("./OpenClose [O]/Motorcicle/Motorcicle"));
const TypeVehicle_1 = require("./OpenClose [O]/TypeVehicle/TypeVehicle");
const Credito_1 = __importDefault(require("./[L]Liskov/Credito/Credito"));
const Debito_1 = __importDefault(require("./[L]Liskov/Debito/Debito"));
const Car_2 = __importDefault(require("./[I] Segrega\u00E7\u00E3o de interfaces/Car/Car"));
const Motorcycle_1 = __importDefault(require("./[I] Segrega\u00E7\u00E3o de interfaces/MotorCycle/Motorcycle"));
// Princípios de programação --> SOLID
// Oq é um princípio de programação -> uma verdade básica universal que não muda
// Essa verdade é responsável por criar leis e padrões
// SOLID é um acrônimo -> cada letra é um princípio --> esses princípios foram definidos pelo Uncle Bob
//                               [S] -> Single Responsibility Principle (Responsabilidade única)
// "Nunca deve haver mais de um motivo para uma classe/função/etc... mudar"
// Objetivo único
// ex:
// Pense que você tem uma classe Produto e nela vc tem um método chamado frete(nesse método vc pega o preço do produto que é uma propriedade e multiplica por 10%)
//  class Produto {
//   private price: number = 12;
//   public calculaFrete(): number {
//     this.price *= 0.1;
//     return this.price;
//   }
// }
// até aqui ok temos uma única responsabilidade nessa classe -->  calcular o frete
// suponha que agora um colega ou seu chefe peça para voce salvar o produto no banco e você adicione um novo método dentro da classe Produto
// nesse caso a classe Produto teria a responsabilidade de calcular o frete e salvar no banco, são 2 responsabilidades
// em um caso com 2 métodos você pode até pensar que não interfere em nada alterar eles ou adicionar funcionalidades, mas pense em um cenário em que o projeto cresça e além de calcular frete e salvar no banco, você tenha que mostrar para o usuário, salvar dados do cartão e alterar o preço caso tenha promoção, com isso estamos ferindo o primeiro principio do SOLID
// ex professor:
const cliente = new Client_1.default();
const notificação = new Notify_1.default(cliente);
//                          [0] open closed principle
// Aberto para extensão e fechado para modificação
// sempre poder extender uma funcionalidade (classe) mas nunca altera-la
const type = TypeVehicle_1.TypeVehicle.CAR;
let vehicle;
if (type === TypeVehicle_1.TypeVehicle.CAR) {
    vehicle = new Car_1.default("Azul", 1, 1, 1, 1);
}
else if (type === TypeVehicle_1.TypeVehicle.MOTORCYCLE) {
    vehicle = new Motorcicle_1.default("Azul", 1, 1);
}
// criamos 2 interfaces uma para carro e uma para moto
// implementamos essas interfaces (criamos um contrato), e com isso fizemos com que a classe Car e Motorcycle tivessem suas diferenças (moto n tem assentos ou portas), aplicamos Single Responsibility Principle (cada uma das classes tem uma interface, separadas com cada uma tendo uma única responsabilidade)  e a letra O open close, aberto para extensão fechado para alteração
//                    [L]  Liskov Substitution Principle
// uma classe derivada pode ser substituível por usa classe base
const credit = new Credito_1.default();
const debit = new Debito_1.default();
// criamos uma classe abstrata e com 2 métodos e logo depois criamos outras 2 classes que herdam dessa classe abstrata, implementando os mesmos métodos existentes na classe abstrata e ainda mais aplicando conceito de polimorfismo, onde em cada uma o método se comporta de modo diferente
// se trocarmos a classe abstrata para alguma das 2 que herdaram dela o tratamento vai ser o msm, o resultado final tbm
// com isso aplicamos Liskov
//             [I] Interface Segregation principle
// classes não devem ser forçadas a depender de métodos que não usam
const newCarTest = new Car_2.default("branco", 4, 4, 4);
newCarTest.startVehicle();
const newMoto = new Motorcycle_1.default("breta", 2, 2);
//criamos 2 interfaces especializadas uma somente para o carro e uma somente para a moto, implementamos as 2 em outras 2 classes carro e moto
