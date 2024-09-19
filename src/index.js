const calcular = document.getElementById("calculate");

function imc() {
  const nome = document.getElementById("name").value;
  const altura = document.getElementById("height").value;
  const peso = document.getElementById("weight").value;
  const resultado = document.getElementById("resultado");

  if (nome.value !== "" && altura !== "" && peso !== "") {
    const valorImc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (valorImc < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorImc < 25) {
      classificacao = "com peso ideial.";
    } else if (valorImc < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorImc < 35) {
      classificacao = "com obesidade grau 1.";
    } else if (valorImc < 40) {
      classificacao = "com obesidade grau 2.";
    } else {
      classificacao = "com obesidade grau 3. Cuidado!!";
    }

    resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos!!";
  }
}

calcular.addEventListener("click", imc);