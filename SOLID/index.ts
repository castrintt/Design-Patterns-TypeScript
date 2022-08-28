// Princípios de programação --> SOLID

// Oq é um princípio de programação -> uma verdade básica universal que não muda
// Essa verdade é responsável por criar leis e padrões

// SOLID é um acrônimo -> cada letra é um princípio --> esses princípios foram definidos pelo Uncle Bob

//                               [S] -> Single Responsibility Principle (Responsabilidade única)

// "Nunca deve haver mais de um motivo para uma classe/função/etc... mudar"
// Objetivo único

// ex:

// Pense que você tem uma classe Produto e nela vc tem um método chamado frete(nesse método vc pega o preço do produto que é uma propriedade e multiplica por 10%)

abstract class Produto {
  private price: number = 12;

  public calculaFrete(): number {
    this.price *= 0.1;
    return this.price;
  }
}

// até aqui ok temos uma única responsabilidade nessa classe -->  calcular o frete

// suponha que agora um colega ou seu chefe peça para voce salvar o produto no banco e você adicione um novo método dentro da classe Produto
// nesse caso a classe Produto teria a responsabilidade de calcular o frete e salvar no banco, são 2 responsabilidades
// em um caso com 2 métodos você pode até pensar que não interfere em nada alterar eles ou adicionar funcionalidades, mas pense em um cenário em que o projeto cresça e além de calcular frete e salvar no banco, você tenha que mostrar para o usuário, salvar dados do cartão e alterar o preço caso tenha promoção, com isso estamos ferindo o primeiro principio do SOLID

// ex professor:

import Client from "./Client [S]/Client";
import Notify from "./Client [S]/Notify/Notify";
import Car from "./Vehicles [O]/Car/Car";
import Motorcycle from "./Vehicles [O]/Motorcicle/Motorcicle";
import { TypeVehicle } from "./Vehicles [O]/TypeVehicle/TypeVehicle";
import Vehicles from "./Vehicles [O]/Vehicles";

const cliente = new Client();
const notificação = new Notify(cliente);

//                          [0] open closed principle

// Aberto para extensão e fechado para modificação
// sempre poder extender uma funcionalidade (classe) mas nunca altera-la

const type = TypeVehicle.CAR;

let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Azul", 1, 1, 1, 1);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Azul", 1, 1);
}

// criamos 2 interfaces uma para carro e uma para moto

// implementamos essas interfaces (criamos um contrato), e com isso fizemos com que a classe Car e Motorcycle tivessem suas diferenças (moto n tem assentos ou portas), aplicamos Single Responsibility Principle (cada uma das classes tem uma interface, separadas com cada uma tendo uma única responsabilidade)  e a letra O open close, aberto para extensão fechado para alteração





//                              [L]  Liskov Substitution Principle

// uma classe derivada pode ser substituível por usa classe base

