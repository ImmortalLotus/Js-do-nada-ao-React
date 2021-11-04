class ContaCorrente {
    agencia;
    //usar _ caso n seja compilado como privado ou caso pedirem.
    #saldo;

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
}
