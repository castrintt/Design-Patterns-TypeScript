"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NubankCard_1 = __importDefault(require("../NubankCard/NubankCard"));
class Debito extends NubankCard_1.default {
    validate() {
        console.log("Validar se há saldo suficiente");
    }
}
exports.default = Debito;
