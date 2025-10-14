document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("nome");
  const btnCurtir = document.getElementById("btn-curtir");
  const btnLimpar = document.getElementById("btn-limpar");
  const mensagem = document.getElementById("mensagem");

  // Tenta obter as curtidas do localStorage, se não houver, inicia um array vazio.
  let curtidas = JSON.parse(localStorage.getItem('curtidas')) || [];

  // Função para atualizar a mensagem de curtidas.
  function atualizarMensagem() {
    const total = curtidas.length;

    if (total === 0) {
      mensagem.textContent = "Ninguém curtiu";
    } else if (total === 1) {
      mensagem.textContent = `${curtidas[0]} curtiu`;
    } else if (total === 2) {
      mensagem.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
      mensagem.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
    }
  }

  // Função para salvar as curtidas no localStorage.
  function salvarCurtidas() {
    localStorage.setItem('curtidas', JSON.stringify(curtidas));
  }

  // Evento de clique no botão "Curtir".
  btnCurtir.addEventListener("click", () => {
    const nome = input.value.trim();

    if (nome && !curtidas.includes(nome)) {
      curtidas.push(nome);
      salvarCurtidas();
      atualizarMensagem();
    }

    input.value = "";
  });

  // Evento de clique no botão "Limpar".
  btnLimpar.addEventListener("click", () => {
    curtidas = []; // Esvazia o array de curtidas.
    localStorage.removeItem('curtidas'); // Remove as curtidas do localStorage.
    atualizarMensagem();
  });

  // Atualiza a mensagem ao carregar a página.
  atualizarMensagem();
});