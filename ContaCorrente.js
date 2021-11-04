import { Cliente } from "./Cliente.js" 

export class ContaCorrente {
    agencia;
    static numeroDeContas = 0;
    //usar _ caso n seja compilado como privado ou caso pedirem.
    #cliente;
    #saldo;

    constructor(agencia, cliente) {
        this.#cliente = cliente;
        this.agencia = agencia;
        numeroDeContas++;
    }

    sacar(valor) {
        if (this.#saldo < valor) {
            this.#saldo -= valor;
            return this.#saldo;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            return;
        }
    }

    transferir(valor, conta) {
        if (valor < this.#saldo) {
            conta.depositar(valor);
            this.sacar(valor);
        }
    }
    //os gets e sets no js funcionam igualzinho aos getsets do C#
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }
}
