import { Livro } from "./Livro";

export class LivroAventura extends Livro {
    private _saga: string;

    constructor(numero: number, nome: string, ano: number, tipo: number, estoque: number, saga: string){
        super(numero, nome, ano, tipo, estoque);
        this._saga = saga;
    }

    public get saga() {
        return this._saga;
    }

    public set saga(saga: string) {
        this._saga = saga;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Faz parte de uma saga: " + this._saga);
    }
}