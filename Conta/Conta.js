//Classe abstrata -> É um tipo de classe especial que não pode ser instanciada, apenas herdada, dessa forma não poderá ser criada uma nova conta.
export class Conta{

        constructor(saldoInicial, cliente, agencia){
            if(this.constructor == Conta){
               throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois é uma classe abstrata") //lançar um novo objeto do tipo error
               //parando a execução do código
            }
            this._saldo = saldoInicial;
            this._cliente = cliente;
            this._agencia = agencia;
            //console.log(this.constructor);
        }
        
        set cliente(novoValor){
            if (novoValor instanceof Cliente){
                this._cliente = novoValor;
            }
        }

        get cliente(){
            return this._cliente;
        }

        get saldo(){
            return this._saldo;
        }

        //Método abstrato
        sacar(valor){

            throw new Error("O método sacar da conta é abstrato")
           /* let taxa = 1;
            if(this._tipo == "corrente"){
                taxa = 1.1;
            }
            if(this._tipo == "salario"){
                taxa = 1.05;
            }
            if(this._tipo == "empresarial"){
                taxa = 1.15; */
            }
           

        _sacar(valor, taxa){
            const valorSacado = taxa * valor;
            if (this.saldo >= valorSacado){
                this._saldo -= valorSacado;
                return valorSacado;
            }
            return 0;
        }
    
        depositar(valor){
            this._saldo += valor;
        }
    
        transferir (valor, conta){ 
            const valorSacado= this.sacar(valor);
            conta.depositar(valorSacado);
        }
       
    }
