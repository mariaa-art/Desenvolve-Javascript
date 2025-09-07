const estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      console.log(`O livro "${titulo}" já está no estoque.`);
      return;
    }
  }
  estoque.push({ titulo, autor, quantidade });
  console.log(`Livro "${titulo}" adicionado ao estoque.`);
}

function removerLivro(titulo) {
  const index = estoque.findIndex(livro => livro.titulo === titulo);
  if (index !== -1) {
    estoque.splice(index, 1);
    console.log(`Livro "${titulo}" removido do estoque.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}

function atualizarQuantidade(titulo, novaQuantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = novaQuantidade;
      console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
      return;
    }
  }
  console.log(`Livro "${titulo}" não encontrado no estoque.`);
}

function listarLivros() {
  if (estoque.length === 0) {
    console.log("O estoque está vazio.");
    return;
  }
  console.log("Livros no estoque:");
  for (let livro of estoque) {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
  }
}

// Testando com livros atualizados

adicionarLivro("Duna", "Frank Herbert", 8);
adicionarLivro("Game of Thrones", "George R.R. Martin", 5);
adicionarLivro("Jogador Nº 1", "Ernest Cline", 7);
adicionarLivro("Duna", "Frank Herbert", 3); // já existe

listarLivros();

atualizarQuantidade("Jogador Nº 1", 10);
removerLivro("Game of Thrones");
removerLivro("O Código Da Vinci"); // não existe no estoque

listarLivros();
