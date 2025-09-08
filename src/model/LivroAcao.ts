import { Livro } from "./Livro";

export class LivroAcao extends Livro {

    private _tipoDeAcao: string;

    constructor(numero: number, nome: string, ano: number, tipo: number, estoque: number, tipoDeAcao: string){
        super(numero, nome, ano, tipo, estoque);
        this._tipoDeAcao = tipoDeAcao;
    }

    public get tipoDeAcao() {
        return this._tipoDeAcao;
    }

    public set tipoDeAcao(tipoDeAcao: string) {
        this._tipoDeAcao = tipoDeAcao;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("O tipo de acao: " + this._tipoDeAcao);
    }
    
} 