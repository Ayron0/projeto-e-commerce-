import leia = require("readline-sync");
import { colors } from './src/util/Colors';
import { LivroAcao } from './src/model/LivroAcao';
import { LivroAventura } from './src/model/LivroAventura';
import { LivroController } from "./src/controller/LivroController";
import { LivroRepository } from "./src/repository/LivroRepository";

export function main() {

    let livros: LivroController = new LivroController();
    let numero: number, ano: number, tipo: number, estoque: number, opcao: number;
    let nome: string, tipoDeAcao: string, saga: string;
    let continua: boolean = true;
    const tiposLivros = [ 'Livro de Acao', 'Livro de Aventura'];

    console.log("\nCriar Livros\n");

    let cc1: LivroAcao = new LivroAcao(livros.gerarNumero(), 'Aventuras de Tim tim', 2000, 1, 200, 'Militar');
    livros.cadastrar(cc1);

    let cc2: LivroAcao = new LivroAcao(livros.gerarNumero(), 'Moana', 2015, 1, 50, 'Aventura');
    livros.cadastrar(cc2);

    let cp1: LivroAventura = new LivroAventura(livros.gerarNumero(), 'Jardim Secreto', 2008, 2, 10, 'nao');
    livros.cadastrar(cp1);

    let cp2: LivroAventura = new LivroAventura(livros.gerarNumero(), 'Senhor dos Aneis o Retorno do Rei', 2009, 2, 80, 'Sim');
    livros.cadastrar(cp2);

    livros.listarTodas();

    while (continua) {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                LIVRARIA FORTELON                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar livro                          ");
        console.log("            2 - Listar todos os livros               ");
        console.log("            3 - Buscar Livro por Numero              ");
        console.log("            4 - Atualizar Dados do Livro             ");
        console.log("            5 - Apagar Livro do Banco de Dados        ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
         console.log("                                                     ",
            colors.reset
        );

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.greenstrong,
                "\nLivraria Foortelon - A leitura muda o Mundo!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.redstrong, "\n\n Cadastrar Livro\n\n", colors.reset);
                console.log("Digite o nome do livro: ");
                nome = leia.question("")

                console.log("Digite o ano de publicacao: ");
                ano = leia.questionInt("");

                console.log("Digite o tipo/categoria do livro: ");
                tipo = leia.keyInSelect(tiposLivros, "", {cancel: false}) + 1;

                console.log("Digite a quantidade de livros: ");
                estoque = leia.questionInt("");


                switch (tipo) {
                    case 1:
                        console.log("Digite o tipo de acao do livro: ");
                        tipoDeAcao = leia.question("")
                        livros.cadastrar(
                            new LivroAcao(livros.gerarNumero(), nome, ano, tipo, estoque, tipoDeAcao)
                        );
                        break;
                    
                    case 2:
                        console.log("Esse livro faz parte de uma saga? Responda sim ou nao: ");
                        saga = leia.question("")
                        livros.cadastrar(
                            new LivroAventura(livros.gerarNumero(), nome, ano, tipo, estoque, saga)
                        );
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.redstrong, "\n\nListar todos os livros\n\n", colors.reset);
                livros.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados do Livro - por número\n\n", colors.reset);
                console.log("Digite o numero do Livro: ");
                numero = leia.questionInt("");
                livros.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados do Livro\n\n", colors.reset);
                console.log("Digite o numero do Livro: ");
                numero = leia.questionInt("");

                let livro = livros.buscarNoArray(numero);
                if (livro != null) {
                    console.log("Digite o nome do livro: ");
                    nome = leia.question("");

                    console.log("Digite o ano de publicacao: ");
                    ano = leia.questionInt("");

                    tipo = livro.tipo;

                    console.log("Digite a quantidade de livros: ");
                    estoque = leia.questionInt("");

                    switch(tipo) {
                        case 1:
                        console.log("Digite o tipo de acao do livro: ");
                        tipoDeAcao = leia.question("")
                        livros.cadastrar(
                            new LivroAcao(livros.gerarNumero(), nome, ano, tipo, estoque, tipoDeAcao)
                        );
                        break;
                    
                        case 2:
                            console.log("Esse livro faz parte de uma saga? Responda sim ou nao: ");
                            saga = leia.question("")
                            livros.cadastrar(
                                new LivroAventura(livros.gerarNumero(), nome, ano, tipo, estoque, saga)
                            );
                            break;

                    }
                } else {
                    console.log(colors.fg.red,`\nO Livro numero: ${numero} não foi encontrada!`, colors.reset)
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar um Livro do Banco de dados\n\n", colors.reset);
                console.log("Digite o numero do Livro: ");
                numero = leia.questionInt("");
                livros.deletar(numero);

                keyPress()
                break;
            
            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ayron Paulo de Souza Sant Anna");
    console.log("Generation Brasil - ayronpaulo2r@gmail.com");
    console.log("https://github.com/Ayron0");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, " ");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}

main();