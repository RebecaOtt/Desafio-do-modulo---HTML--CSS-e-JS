const customers = [];

for (let i = 1; i <= localStorage.cont; i++) {
  const data = localStorage.getItem("cad" + i);

  if (data) {
    const parts = data.split(";");

    if (parts.length > 4) {
      const client = {
        name: parts[0],
        address: parts[1],
        fone: parts[2],
        dateService: parts[3],
        namePet: parts[4],
        years: parts[5],
        sizePet: parts[6],
      };

      customers.push(client);
    }
  }
}

const cardsContainer = document.getElementById("cards-container");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");
const closeModalButton = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");

function loadCards() {
  cardsContainer.innerHTML = "";

  if (customers.length === 0) {
    cardsContainer.innerHTML = "<p style='text-align:center; font-size:18px;'>Nenhum cliente cadastrado.</p>";
    return;
  }

  customers.forEach((client) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const data = new Date(client.dateService);
    const dateFormatted = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    card.innerHTML = `<h3>${client.namePet}</h3> <p><strong>Data:</strong> ${dateFormatted}</p>`;

    card.addEventListener("click", () => openModal(client));

    cardsContainer.appendChild(card);
  });
}

function openModal(client) {
  modalTitle.textContent = client.namePet;

  const data = new Date(client.dateService);
    const dateFormatted = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

  modalContent.innerHTML = `
    <p><strong>Nome do dono:</strong> ${client.name}</p>
    <p><strong>Endereço:</strong> ${client.address}</p>
    <p><strong>Telefone:</strong> ${client.fone}</p>
    <p><strong>Data do atendimento:</strong> ${dateFormatted}</p>
    <p><strong>Idade do animal:</strong> ${client.years}</p>
    <p><strong>Porte do animal:</strong> ${client.sizePet}</p>
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

loadCards();
