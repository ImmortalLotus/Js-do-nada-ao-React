import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaDeAuth } from "./SistemaDeAuth.js"

const cliente1 = new Cliente();
cliente1.nome = "caio castro";
const diretor = new Diretor("Nilson", "0324234", 2000);
diretor.senha = 1;
const logado = SistemaDeAuth.login(diretor, 1);
console.log("O nome do mano é " + logado);

