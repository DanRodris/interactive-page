const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const linkHome = document.getElementById("linkHome");

// Funções para manipular a navegação
open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));

// Função para verificar se algum modal está aberto
function isAnyModalOpen() {
  const modal1 = document.getElementById("meuModal");
  const modal2 = document.getElementById("abrirModalContato");
  return modal1.classList.contains("show") || modal2.classList.contains("show");
}

// Função para abrir o modal principal
function abrirModal() {
  if (isAnyModalOpen()) {
    alert("Feche a mensagem atual antes de abrir outro.");
    return; // Interrompe a execução se outro modal estiver aberto
  }
  const modal = document.getElementById("meuModal");
  modal.classList.add("show"); // Torna o modal visível
}

// Função para fechar o modal principal
function fecharModal() {
  const modal = document.getElementById("meuModal");
  modal.classList.remove("show"); // Esconde o modal
}

// Função para abrir o modal de contato
function abrirModalContato() {
  if (isAnyModalOpen()) {
    alert("Feche a mensagem atual antes de abrir outro.");
    return; // Interrompe a execução se outro modal estiver aberto
  }
  const modal = document.getElementById("abrirModalContato");
  modal.classList.add("show"); // Torna o modal visível
}

// Função para fechar o modal de contato
function fecharModalContato() {
  const modal = document.getElementById("abrirModalContato");
  modal.classList.remove("show"); // Esconde o modal
}

// Evento para impedir o funcionamento do link "Home" quando os modais estão abertos
linkHome.addEventListener("click", (event) => {
  if (isAnyModalOpen()) {
    event.preventDefault(); // Impede a navegação
    alert("Feche a mensagem antes de ir para a página inicial.");
  }
});



























