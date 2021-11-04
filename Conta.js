//classe abstrata
export class Conta {
    #saldoInicial;
    #cliente;
    #saldo;
    #agencia;
    static numeroDeContas = 0;
    //usar _ caso n seja compilado como privado ou caso pedirem.

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não pode instanciar uma classe abstrata.");
        }
        this.#saldoInicial = saldoInicial;
        this.#agencia = agencia;
        this.#cliente = cliente;
        numeroDeContas++;
    }
    //metodo abstrato.
    sacar() {
        throw new Error("Não se pode chamar um método abstrato");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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