import java.text.SimpleDateFormat;
import java.util.Date;

public class Locacao {

    private Date data;
    private double valorTotalAPagar;
    private Filme[] listaFilmes;
    private int filmesAdicionados;

    public Locacao() {
        this.data = new Date();
        this.listaFilmes = new Filme[10];
        this.filmesAdicionados = 0;
        this.valorTotalAPagar = 0;
    }

    public Locacao(Date data) {
        this.data = data;
        this.listaFilmes = new Filme[10];
        this.filmesAdicionados = 0;
        this.valorTotalAPagar = 0;
    }

    public void addFilme(Filme filme) {
        if (filmesAdicionados < listaFilmes.length) {
            this.listaFilmes[filmesAdicionados] = filme;
            this.filmesAdicionados++;
            this.valorTotalAPagar += filme.getValorLocacao();
        } else {
            System.out.println("Não é possível adicionar mais filmes a esta locação.");
        }
    }

    @Override
    public String toString() {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        StringBuilder sb = new StringBuilder();
        sb.append("--------------------------------------------------\n");
        sb.append("Data da locação: ").append(sdf.format(data)).append("\n");
        sb.append("Filmes:\n");
        for (int i = 0; i < filmesAdicionados; i++) {
            sb.append(" - ").append(listaFilmes[i].getTitulo()).append("\n");
        }
        sb.append("Valor da locação: R$ ").append(String.format("%.2f", valorTotalAPagar)).append("\n");
        return sb.toString();
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public double getValorTotalAPagar() {
        return valorTotalAPagar;
    }
}