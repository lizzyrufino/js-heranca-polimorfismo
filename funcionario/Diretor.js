import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        
        this._bonificacao = 1.1;
        this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}