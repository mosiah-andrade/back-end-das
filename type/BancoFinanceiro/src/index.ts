// ./Principal.ts

import { Agencia } from "./modulos/Agencia";
import { Cliente } from "./modulos/Cliente";
import { Conta } from "./modulos/conta";
import { Endereco } from "./modulos/Endereco";

console.log("Olá Mundo!");

// Cria uma nova instância da classe Endereco
const endRenato: Endereco = new Endereco("PE", "Olinda", "Tamarineira", "Rua Padre são Miguel", "AP 1301", "50070-190",123);
const renato: Cliente = new Cliente("Renato", "123.456.789-00", new Date(1990, 5, 15), "MG-12.345.678", "renato@email.com", "(81) 91234-5678", endRenato);

// Atribui valores usando os setters. A sintaxe é como a de uma propriedade normal.
// endRenato.cidade = "Paulista";
// endRenato.bairro = "Fragoso";

// Imprime a representação em string do objeto Endereco
console.log(endRenato.toString());
console.log(renato.toString());

// Cria uma nova instância da classe Endereco para a agência
const endeAgenciaExemplo: Endereco= new Endereco("SP", "São Paulo", "Centro", "Avenida Paulista", "10º andar", "01311-000",1000);

// Cria uma nova instância da classe Agencia com valores iniciais
const agenciaExemplo: Agencia = new Agencia(
    "Agência Central",
    1234,
    "contato@agenciacentral.com",
    "(81) 99999-8888",
    endeAgenciaExemplo
);

// Imprime os detalhes do objeto Agencia
console.log("\nDados da Agência:");
console.log(agenciaExemplo.toString());

// Acessa um atributo individual usando o getter e imprime
// console.log(`\nNome da agência: ${agenciaExemplo.nome}`);

const contaRenato: Conta = new Conta( renato, 5678, agenciaExemplo); 
console.log("\nDados da Conta:");
console.log(contaRenato.toString());

contaRenato.depositar(1000);
contaRenato.sacar(200);


console.log(contaRenato.getTransacoes().toString());
console.log("Saldo: " + contaRenato.getSaldo().toFixed(2));