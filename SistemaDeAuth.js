export class SistemaDeAuth {
    static login(autenticavel, senha) {
        if (SistemaDeAuth.ehAutenticavel(autenticavel) && autenticavel.autenticar instanceof Function) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel;
    }
}