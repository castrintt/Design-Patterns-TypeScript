"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NubankCard_1 = __importDefault(require("../NubankCard/NubankCard"));
class Credito extends NubankCard_1.default {
    validate() {
        console.log("Verificando Limite");
    }
}
exports.default = Credito;
