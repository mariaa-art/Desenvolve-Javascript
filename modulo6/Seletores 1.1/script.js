let tarefas = [];

//  DOM
const input = document.getElementById("nova-tarefa");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// renderizar as tarefas
function renderizarTarefas() {
  listaTarefas.innerHTML = ""; 

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    span.className = tarefa.status ? "tarefa-concluida" : "tarefa-nao-concluida";

    // Quando clicar no checkbox, alterna o status
    checkbox.addEventListener("change", () => {
      tarefa.status = checkbox.checked;
      renderizarTarefas();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    listaTarefas.appendChild(li);
  });
}

// nova tarefa
function adicionarTarefa() {
  const descricao = input.value.trim();
  if (descricao !== "") {
    tarefas.push({ descricao: descricao, status: false });
    input.value = "";
    renderizarTarefas();
  }
}

// Eventos
btnAdicionar.addEventListener("click", adicionarTarefa);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
