const clientes = [];

for (let i = 1; i <= localStorage.cont; i++) {
  const data = localStorage.getItem("cad" + i);

  if (data) {
    const parts = data.split(";");

    if (parts.length > 4) {
      const cliente = {
        nome: parts[0],
        endereco: parts[1],
        telefone: parts[2],
        dataAtendimento: parts[3],
        nomeAnimal: parts[4],
        idade: parts[5],
        porteAnimal: parts[6],
      };

      clientes.push(cliente);
    }
  }
}

const cardsContainer = document.getElementById("cards-container");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");
const closeModalButton = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");

function carregarCards() {
  cardsContainer.innerHTML = "";

  if (clientes.length === 0) {
    cardsContainer.innerHTML = "<p style='text-align:center; font-size:18px;'>Nenhum cliente cadastrado.</p>";
    return;
  }

  clientes.forEach((cliente) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const data = new Date(cliente.dataAtendimento);
    const dataFormatada = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    card.innerHTML = `<h3>${cliente.nomeAnimal}</h3> <p><strong>Data:</strong> ${dataFormatada}</p>`;

    card.addEventListener("click", () => abrirModal(cliente));

    cardsContainer.appendChild(card);
  });
}

function abrirModal(cliente) {
  modalTitle.textContent = cliente.nomeAnimal;

  const data = new Date(cliente.dataAtendimento);
    const dataFormatada = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

  modalContent.innerHTML = `
    <p><strong>Nome do dono:</strong> ${cliente.nome}</p>
    <p><strong>Endereço:</strong> ${cliente.endereco}</p>
    <p><strong>Telefone:</strong> ${cliente.telefone}</p>
    <p><strong>Data do atendimento:</strong> ${dataFormatada}</p>
    <p><strong>Idade do animal:</strong> ${cliente.idade}</p>
    <p><strong>Porte do animal:</strong> ${cliente.porteAnimal}</p>
  `;

  toggleModal();
}

function toggleModal() {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
}

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

carregarCards();
