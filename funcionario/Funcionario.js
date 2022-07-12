export class Funcionario{
    constructor(nome, salario, cpf){
    this._nome = nome; //indicando propriedades privadas, apenas essa classe tem direito de mexer nessa propriedade _
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this._senha;
    
    }

   autenticar(senha){
    return senha == this._senha;
   }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}