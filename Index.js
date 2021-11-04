class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    //usar _ caso n seja compilado como privado ou caso pedirem.
    #saldo;

    sacar(valor) {
        if (this.#saldo < valor) {
            this.#saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "caio castro";
console.log("O nome do mano é " + cliente1.nome);

