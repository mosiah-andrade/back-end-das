import { Endereco } from "./Endereco";

export class Cliente {  
    private nome: string;
    private cpf: string;
    private dataNasc: Date;
    private rg: string;
    private email: string;
    private telefone: string;
    private endereco: Endereco;

    constructor(nome: string, cpf: string, dataNasc: Date, rg: string, email: string, telefone: string, endereco: Endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.rg = rg;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    public getNome(): string {
        return this.nome;
    }
    public getCpf(): string {
        return this.cpf;
    }
    public getDataNasc(): Date {
        return this.dataNasc;
    }
    public getRg(): string {
        return this.rg;
    }
    public getEmail(): string {
        return this.email;
    }
    public getTelefone(): string {
        return this.telefone;
    }
    public getEndereco(): Endereco {    
        return this.endereco;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    public setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }

    public toString(): string { 
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Data de Nascimento: ${this.dataNasc.toLocaleDateString()}, RG: ${this.rg}, Email: ${this.email}, Telefone: ${this.telefone}, Endereço: ${this.endereco.toString()}`;
    }
}
