function saveForm() {
  if (typeof(Storage) !== "undefined") {

    const nome = document.getElementById('nome').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const atendimento = document.getElementById('atendimento').value.trim();
    const nomePet = document.getElementById('nomePet').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const portAnimal = document.getElementById('portAnimal').value.trim();

    if (!nome || !endereco || !telefone || !atendimento || !nomePet || !idade || !portAnimal) {
      alert("Por favor, preencha todos os campos antes de salvar!");
      return;
    }

    if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont) + 1;
    } else {
      localStorage.cont = 1;
    }

    let cad = `${nome};${endereco};${telefone};${atendimento};${nomePet};${idade};${portAnimal}`;

    localStorage.setItem("cad" + localStorage.cont, cad);
    alert("Cadastro salvo!");
  }
}
