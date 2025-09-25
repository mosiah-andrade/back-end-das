import { Agencia } from "./Agencia";
import { Cliente } from "./Cliente";
import { TipoTransacao } from "./TipoTransacao";
import { Transacao }from "./Transacao";

export class Conta {
    private cliente: Cliente;
    private numero: number;
    private agencia: Agencia;
    private dataCriacao: Date;
    private saldo: number;
    private status: boolean;
    private transacoes: Transacao[];


    constructor(cliente: Cliente, numero: number, agencia: Agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = new Date();
        this.saldo = 0;
        this.status = true;
        this.transacoes = [];
    }

    getCliente(): Cliente {
        return this.cliente;
    }
    getNumero(): number {
        return this.numero;
    }
    getAgencia(): Agencia {
        return this.agencia;
    }
    getDataCriacao(): Date {    
        return this.dataCriacao;
    }
    getSaldo(): number {
        return this.saldo;
    }
    getStatus(): boolean {
        return this.status;
    }
    getTransacoes(): Transacao[] {
        return this.transacoes;
    }
    setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }
    setNumero(numero: number) {
        this.numero = numero;
    }
    setAgencia(agencia: Agencia) {
        this.agencia = agencia;
    }
    setDataCriacao(dataCriacao: Date) {    
        this.dataCriacao = dataCriacao;
    }
    setSaldo(saldo: number) {
        this.saldo = saldo;
    }
    setStatus(status: boolean) {
        this.status = status;
    }
    setTransacoes(transacoes: Transacao[]) {
        this.transacoes = transacoes;
    }
    toString(): string {
        return `Conta [Cliente: ${this.cliente}, Numero: ${this.numero}, Agencia: ${this.agencia}\n Data Criacao: ${this.dataCriacao.toLocaleDateString()}, Saldo: ${this.saldo.toFixed(2)}, Status: ${this.status ? 'Ativa' : 'Inativa'}, Transacoes: ${this.transacoes.length}]`;
    }

    public sacar(valor: number): boolean {
        if (this.status && valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            const transacao = new Transacao(TipoTransacao.SAQUE, valor, "-");
            this.transacoes.push(transacao);
            return true;
        } else {
            console.log("Saque não autorizado.");
            return false;
        }
    }

    public depositar(valor: number): boolean {
        if (this.status && valor > 0) {
            this.saldo += valor;
            const transacao = new Transacao(TipoTransacao.DEPOSITO, valor, '-');
            this.transacoes.push(transacao);
            return true;
        } else {
            console.log("Depósito não autorizado.");
            return false;
        }
    }
    // public transferir(valor: number, contaDestino: Conta): boolean {
    //     if (this.status && contaDestino.getStatus() && valor > 0 && this.saldo >= valor) {
    //         this.saldo -= valor;
    //         contaDestino.depositar(valor);
    //         const transacao = new Transacao(TipoTransacao.TRANSFERENCIA, valor, contaDestino.getCliente());
    //         this.transacoes.push(transacao);
    //         return true;
    //     } else {
    //         console.log("Transferência não autorizada.");
    //         return false;
    //     }
    // }
}   
