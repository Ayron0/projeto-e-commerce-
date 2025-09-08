export abstract class Livro{
    
    private _numero: number;
    private _nome: string;
    private _ano: number;
    private _tipo: number;
    private _estoque: number;
    

    constructor(numero: number, nome: string, ano: number, tipo: number, estoque: number){
        this._numero = numero
        this._nome = nome;
        this._ano = ano;
        this._tipo = tipo;
        this._estoque = estoque;
    }


    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get ano(): number {
        return this._ano;
    }

    public set ano(ano: number) {
        this._ano = ano;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get estoque(): number {
        return this._estoque;
    }

    public set estoque(estoque: number) {
        this._estoque = estoque;
    }


    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Livro de Ação";
                break;
            case 2:
                tipo = "Livro de Aventura";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Livro:");
        console.log("*****************************************************");
        console.log("Nome do Livro: " + this._nome);
        console.log("Ano de Publicacao: " + this._ano);
        console.log("Tipo de livro: " + tipo);
        console.log("Quantidade de livros: " + this.estoque);
        

    }

}