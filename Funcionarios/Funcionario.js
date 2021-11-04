export class Funcionario {
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
    }
    get nome() {
        return this._nome;
    }
    get salario() {
        return this._salario;
    }
    get cpf() {
        return this._cpf;
    }
    get bonificacao() {
        return this._bonificacao;
    }
    set senha(senha) {
        this._senha = senha;
    }

    autenticar(senha) {
        return senha == this._senha;s
    }
}