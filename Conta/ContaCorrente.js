import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroDeContasC = 0;

    constructor(agencia, cliente) {
        super(0, cliente, agencia);
        numeroDeContasC++;
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
