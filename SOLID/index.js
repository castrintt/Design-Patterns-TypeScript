"use strict";
// Princípios de programação --> SOLID
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Oq é um princípio de programação -> uma verdade básica universal que não muda
// Essa verdade é responsável por criar leis e padrões
// SOLID é um acrônimo -> cada letra é um princípio --> esses princípios foram definidos pelo Uncle Bob
//                               [S] -> Single Responsibility Principle (Responsabilidade única)
// "Nunca deve haver mais de um motivo para uma classe/função/etc... mudar"
// Objetivo único
// ex:
// Pense que você tem uma classe Produto e nela vc tem um método chamado frete(nesse método vc pega o preço do produto que é uma propriedade e multiplica por 10%)
class Produto {
    constructor() {
        this.price = 12;
    }
    calculaFrete() {
        this.price *= 0.1;
        return this.price;
    }
}
// até aqui ok temos uma única responsabilidade nessa classe -->  calcular o frete
// suponha que agora um colega ou seu chefe peça para voce salvar o produto no banco e você adicione um novo método dentro da classe Produto
// nesse caso a classe Produto teria a responsabilidade de calcular o frete e salvar no banco, são 2 responsabilidades
// em um caso com 2 métodos você pode até pensar que não interfere em nada alterar eles ou adicionar funcionalidades, mas pense em um cenário em que o projeto cresça e além de calcular frete e salvar no banco, você tenha que mostrar para o usuário, salvar dados do cartão e alterar o preço caso tenha promoção, com isso estamos ferindo o primeiro principio do SOLID
// ex professor:
const Client_1 = __importDefault(require("./Client [S]/Client"));
const Notify_1 = __importDefault(require("./Client [S]/Notify/Notify"));
const TypeVehicle_1 = require("./Vehicles [O]/TypeVehicle/TypeVehicle");
const Vehicles_1 = __importDefault(require("./Vehicles [O]/Vehicles"));
const cliente = new Client_1.default();
const notificação = new Notify_1.default(cliente);
//                          [0] open closed principle
// Aberto para extensão e fechado para modificação
// sempre poder extender uma funcionalidade (classe) mas nunca altera-la
const type = TypeVehicle_1.TypeVehicle.CAR;
let vehicle;
if (type === TypeVehicle_1.TypeVehicle.CAR) {
    vehicle = new Vehicles_1.default("Azul", 1, 1, 1, 1);
    vehicle.car();
}
else if (type === TypeVehicle_1.TypeVehicle.MOTORCYCLE) {
    vehicle = new Vehicles_1.default("Azul", 1, 1, 0, 0);
    vehicle.motorcycle();
}
