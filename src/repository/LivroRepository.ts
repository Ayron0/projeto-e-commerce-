import { Livro } from "../model/Livro";

export interface LivroRepository {

	// CRUD da Livro
	procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(conta: Livro): void;
	atualizar(conta: Livro): void;
	deletar(numero: number): void;
	
}