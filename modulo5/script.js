// Calcular tempo restante
function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    return null; 
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  return { dias, horas, minutos, segundos };
}

// Aatualizar temporizador
function atualizarTemporizador() {
  const elemento = document.getElementById("temporizador");
  
  const dataFutura = new Date("2025-12-31T23:59:59"); 
  const tempo = calcularTempoRestante(dataFutura);

  if (!tempo) {
    elemento.textContent = "O tempo acabou!";
    clearInterval(intervalo);
    return;
  }

  elemento.textContent = 
    `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
}

// Atualizar a cada segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

//  não esperar 1 segundo
atualizarTemporizador();
