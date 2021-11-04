export class SistemaDeAuth {
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
    }
}