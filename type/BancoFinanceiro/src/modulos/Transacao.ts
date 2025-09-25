import { Cliente } from "./Cliente";
import { TipoTransacao } from "./TipoTransacao";

export class Transacao {
    private _tipo: TipoTransacao;
    private _valor: number;
    private _data: Date;
    private _clienteTransferencia?: Cliente;
    private _tipoValor: string;

    constructor(tipo: TipoTransacao, valor: number, tipoValor: string, clienteTransferencia?: Cliente) {
        this._tipo = tipo;
        this._valor = valor;
        this._data = new Date();
        if(clienteTransferencia) this._clienteTransferencia = clienteTransferencia;
        this._tipoValor = tipoValor ;
    }
    get tipo(): TipoTransacao {
        return this._tipo;
    }
    get valor(): number {
        return this._valor;
    }   
    get data(): Date {
        return this._data;
    }   
    get clienteTransferencia(): Cliente | undefined {
        return this.clienteTransferencia;
    }
    get tipoValor(): string {
        return this.tipoValor;
    }
    toString(): string {
        let info = `Tipo: ${this._tipo}, Valor: ${this._valor.toFixed(2)}, Data: ${this._data.toLocaleString()}\n`;
        if (this._clienteTransferencia) {
            info += `, Cliente de Transferência: ${this._clienteTransferencia.getNome()}`;
        }
        return info;
    }

}