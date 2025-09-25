

export  class Endereco {
    private uf: string;
    private cidade: string;
    private bairro: string;
    private rua: string;
    private comp: string;
    private cep: string
    private numero: number;

    constructor(uf: string, cidade: string, bairro: string, rua: string, comp: string, cep: string, numero: number) {
        this.uf = uf;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.comp = comp;
        this.cep = cep;
        this.numero = numero;
    }

    public getUf(): string {
        return this.uf;
    }
    public getCidade(): string {
        return this.cidade;
    }
    public getBairro(): string {
        return this.bairro;
    }
    public getRua(): string {
        return this.rua;
    }
    public getComp(): string {
        return this.comp;
    }
    public getCep(): string {
        return this.cep;
    }
    public getNumero(): number {
        return this.numero;
    }
    public setUf(uf: string): void {
        this.uf = uf;
    }
    public setCidade(cidade: string): void {
        this.cidade = cidade;
    }
    public setBairro(bairro: string): void {
        this.bairro = bairro;
    }
    public setRua(rua: string): void {
        this.rua = rua;
    }
    public setComp(comp: string): void {
        this.comp = comp;
    }
    public setCep(cep: string): void {
        this.cep = cep;
    }
    public setNumero(numero: number): void {
        this.numero = numero;
    }
    
    public toString(): string {
        return `${this.rua}, ${this.numero} - ${this.bairro}, ${this.cidade} - ${this.uf}, ${this.cep} (${this.comp})`;
    }
}