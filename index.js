import {Cliente} from "./Cliente.js";
/*import {ContaCorrente} from "./Conta/Corrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupança.js";
import { ContaSalario } from "./Conta/ContaSalario.js";*/
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


/*
const cliente1 = new Cliente("Lis", 11122233309);
const contaCorrenteLis = new ContaCorrente(cliente1, 1001);
//contaCorrenteLis.depositar(500);
//contaCorrenteLis.sacar(100);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

//console.log(contaCorrenteLis);
console.log(contaSalario); */

const diretor = new Diretor("Lis", 10000, 12345678900);
diretor.cadastrarSenha("12345678");
const gerente = new Gerente("Markin zuckerberg", 5000, 1234578410);
gerente.cadastrarSenha("12345");

const cliente = new Cliente("Lais", 8754875487, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345678");
console.log(gerenteEstaLogado, diretorEstaLogado);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteEstaLogado);
