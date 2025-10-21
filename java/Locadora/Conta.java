public class Conta {

    private Cliente cliente;
    private int numero;
    private double saldoDevedor;
    private Locacao[] historicoLocacao;
    private int locacoesRealizadas;

    public Conta() {
        this.saldoDevedor = 0;
        this.historicoLocacao = new Locacao[20];
        this.locacoesRealizadas = 0;
    }

    public Conta(Cliente cliente, int numero) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldoDevedor = 0;
        this.historicoLocacao = new Locacao[20];
        this.locacoesRealizadas = 0;
    }
    
    public void locarFilmes(Filme[] filmes) {
        if (locacoesRealizadas < historicoLocacao.length) {
            Locacao novaLocacao = new Locacao();
            
            for (Filme filme : filmes) {
                if(filme != null) {
                    novaLocacao.addFilme(filme);
                }
            }

            this.historicoLocacao[locacoesRealizadas] = novaLocacao;
            this.locacoesRealizadas++;
            this.saldoDevedor += novaLocacao.getValorTotalAPagar();

        } else {
            System.out.println("Histórico de locações cheio para este cliente.");
        }
    }

    public void pagarDebito(double valor) {
        if (valor > 0) {
            this.saldoDevedor -= valor;
        }
    }

    public String extratoHistorico() {
        StringBuilder sb = new StringBuilder();
        sb.append("\n.:: Histórico de Locações de ").append(this.cliente.getNome()).append(" ::.\n");
        
        if(locacoesRealizadas == 0) {
            sb.append("Nenhuma locação encontrada no histórico.\n");
        } else {
            for (int i = 0; i < locacoesRealizadas; i++) {
                sb.append(historicoLocacao[i].toString());
            }
        }
        sb.append("==================================================\n");
        sb.append("SALDO DEVEDOR TOTAL: R$ ").append(String.format("%.2f", this.saldoDevedor)).append("\n");
        sb.append("==================================================\n");

        return sb.toString();
    }
    
    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public double getSaldoDevedor() {
        return saldoDevedor;
    }
}