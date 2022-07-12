/*
Ser autenticável significa ter o método autenticar

ducky type: o tipo não importa, importa se tiver a mesma propriedade (reutilização de código)
*/

import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && //o in verifica se a chave "autenticar" existe dentro desse objeto "autenticavel";
        autenticavel.autenticar instanceof Function; // e se são instancias de uma função autenticar() -> cliente.js
    }

}