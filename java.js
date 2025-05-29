const participantes = [];
document.getElementById("form-cadastro").addEventListener("submit", cadastrarPessoa);

function cadastrarPessoa(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome && email) {
    participantes.push({ nome, email });
    atualizarLista();
    document.getElementById("form-cadastro").reset();
  }
}

function atualizarLista() {
  const lista = document.getElementById("lista-participantes");
  lista.innerHTML = "";

  participantes.forEach((p) => {
    const item = document.createElement("li");
    item.textContent = `${p.nome} (${p.email})`;
    lista.appendChild(item);
  });
}

function sortear() {
  if (participantes.length === 0) {
    document.getElementById("resultado-sorteio").textContent = "Nenhum participante cadastrado.";
    return;
  }