import leia = require("readline-sync");
import { colors } from './src/util/Colors';

export function main() {

    let opcao: number;
    let continua: boolean = true;

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
                console.log(colors.fg.redstrong, "\n\nCriar Cadastrar Livro\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.redstrong, "\n\nListar todos os livros\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados do Livro - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados do Livro\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar um Livro do Banco de dados\n\n", colors.reset);

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