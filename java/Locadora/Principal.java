

public class Principal {

    public static void main(String[] args) {
        
        Filme filme1 = new Filme("O Poderoso Chefão", 1972, "Crime", 7.50);
        Filme filme2 = new Filme("A Origem", 2010, "Ficção Científica", 8.00);
        Filme filme3 = new Filme("Matrix", 1999, "Ficção Científica", 7.00);
        Filme filme4 = new Filme("Forrest Gump", 1994, "Drama", 6.50);
        Filme filme5 = new Filme("O Senhor dos Anéis: O Retorno do Rei", 2003, "Fantasia", 8.50);
        Filme filme6 = new Filme("Pulp Fiction", 1994, "Crime", 7.00);
        Filme filme7 = new Filme("O Rei Leão", 1994, "Animação", 5.00);
        Filme filme8 = new Filme("Clube da Luta", 1999, "Drama", 7.50);
        Filme filme9 = new Filme("Interestelar", 2014, "Ficção Científica", 8.00);
        Filme filme10 = new Filme("Parasita", 2019, "Suspense", 9.00);

        Cliente cliente1 = new Cliente("Danilo Farias", "111.222.333-44", "Rua A, 123", "9999-1111");
        Conta conta1 = new Conta(cliente1, 1001);

        Cliente cliente2 = new Cliente("Maria Silva", "222.333.444-55", "Rua B, 456", "8888-2222");
        Conta conta2 = new Conta(cliente2, 1002);

        Cliente cliente3 = new Cliente("João Souza", "333.444.555-66", "Rua C, 789", "7777-3333");
        Conta conta3 = new Conta(cliente3, 1003);

        
        conta1.locarFilmes(new Filme[]{filme1, filme7});
        conta1.locarFilmes(new Filme[]{filme2});
        conta1.locarFilmes(new Filme[]{filme9, filme3, filme8});
        conta1.locarFilmes(new Filme[]{filme5});
        
        conta2.locarFilmes(new Filme[]{filme4});
        conta2.locarFilmes(new Filme[]{filme6, filme10});
        conta2.locarFilmes(new Filme[]{filme1, filme2, filme3, filme4, filme5});
        conta2.locarFilmes(new Filme[]{filme8});
        conta2.locarFilmes(new Filme[]{filme9});
        
        conta3.locarFilmes(new Filme[]{filme10, filme7, filme4});
        conta3.locarFilmes(new Filme[]{filme1});
        conta3.locarFilmes(new Filme[]{filme2});
        conta3.locarFilmes(new Filme[]{filme3});

        conta1.pagarDebito(15.00);

        System.out.println(conta1.extratoHistorico());
        System.out.println(conta2.extratoHistorico());
        System.out.println(conta3.extratoHistorico());
    }
}