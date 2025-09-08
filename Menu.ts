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
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
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
                console.log(colors.fg.redstrong, "\n\nCriar Conta na Livraria\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.redstrong, "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

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