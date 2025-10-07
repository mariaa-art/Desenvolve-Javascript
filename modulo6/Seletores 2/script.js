const input = document.getElementById("nome");
const btnCurtir = document.getElementById("btn-curtir");
const mensagem = document.getElementById("mensagem");

let curtidas = [];

// Função para atualizar a mensagem
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

// Evento de clique no botão
btnCurtir.addEventListener("click", () => {
  const nome = input.value.trim();

  if (nome && !curtidas.includes(nome)) {
    curtidas.push(nome);
    atualizarMensagem();
  }

  input.value = "";
});
