function saveForm() {
  if (typeof(Storage) !== "undefined") {

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const fone = document.getElementById('fone').value.trim();
    const service = document.getElementById('service').value.trim();
    const namePet = document.getElementById('namePet').value.trim();
    const years = document.getElementById('years').value.trim();
    const sizePet = document.getElementById('sizePet').value.trim();

    if (!name || !address || !fone || !service || !namePet || !years || !sizePet) {
      alert("Por favor, preencha todos os campos antes de salvar!");
      return;
    }

    if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont) + 1;
    } else {
      localStorage.cont = 1;
    }

    let cad = `${name};${address};${fone};${service};${namePet};${years};${sizePet}`;

    localStorage.setItem("cad" + localStorage.cont, cad);
    alert("Cadastro salvo!");
  }
}
