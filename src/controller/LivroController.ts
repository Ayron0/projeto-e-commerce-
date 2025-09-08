import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";
import { colors } from "../util/Colors";

export class LivroController implements LivroRepository {

    private listaLivros: Array<Livro> = new Array<Livro>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaLivro = this.buscarNoArray(numero);
        
        if(buscaLivro != null) {
            buscaLivro.visualizar();
        }else{
            console.log(colors.fg.red,`\nO Livro numero: ${numero} não foi encontrada!`, colors.reset)
        }
    }
    listarTodas(): void {
        for (let livro of this.listaLivros){
           livro.visualizar();
        };
    }
    cadastrar(livro: Livro): void {
        this.listaLivros.push(livro);
        console.log(colors.fg.green, "\nO Cadastro do livro numero: " + livro.numero + 
            " foi criada com sucesso!", colors.reset
        ); 
    }
    atualizar(livro: Livro): void {
        let buscaLivro = this.buscarNoArray(livro.numero);

        if (buscaLivro != null) {
            this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
            console.log(colors.fg.green, "\nA livro numero: " + livro.numero + 
                " foi atualizada com sucesso!", colors.reset
            );
        } else {
            console.log(colors.fg.red,`\nA livro numero: ${livro.numero} não foi encontrada!`, colors.reset)
        }
    }
    deletar(numero: number): void {
        let buscaLivro = this.buscarNoArray(numero);

        if (buscaLivro != null) {
            //Splice: ele procura uma conta e apaga ela. Esse 1 significa que assim que ele encontra, apaga o primeiro valor
            this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1);
            console.log(colors.fg.green, "\nO Livro numero: " + numero +
                " foi apagado com sucesso!", colors.reset
            );
        } else {
            console.log(colors.fg.red,`\nO Livro numero: ${numero} não foi encontrada!`, colors.reset)
        }
    }
    
    
    //Métodos auxiliares

    //Gera o número da conta
    public gerarNumero(): number {
        return ++ this.numero;
    }

    /* Checa se uma conta existe*/
    public buscarNoArray(numero: number): Livro | null {
        for( let conta of this.listaLivros){
            if (conta.numero === numero){
                return conta;
            }

        }

        return null;
    }

}