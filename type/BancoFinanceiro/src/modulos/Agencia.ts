import { Endereco } from "./Endereco";

export class Agencia {
    private _nome: string;
    private _numero: number;
    private _email: string;
    private _telefone: string;
    private _endereco: Endereco;

    constructor(nome: string, numero: number, email: string, telefone: string, endereco: Endereco) {
        this._nome = nome;
        this._numero = numero;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
    }
    get nome(): string {
        return this._nome;
    }   
    get numero(): number {
        return this._numero;
    }   
    get email(): string {
        return this._email;
    }
    get telefone(): string {    
        return this._telefone;
    }   
    get endereco(): Endereco {
        return this._endereco;
    }   
    set nome(nome: string) {
        this._nome = nome;
    }   
    set numero(numero: number) {
        this._numero = numero;
    }
    set email(email: string) {
        this._email = email;
    }
    set telefone(telefone: string) {    
        this._telefone = telefone;
    }
    set endereco(endereco: Endereco) {
        this._endereco = endereco;
    }

    public toString(): string {
        return `Nome: ${this._nome}, Número: ${this._numero}, Email: ${this._email}, Telefone: ${this._telefone},\n \t Endereço: ${this._endereco.toString()}`;
    }
}
