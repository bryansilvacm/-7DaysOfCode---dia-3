function iniciar() {
  let inicio = document.getElementById("inicio");
  inicio.style.display = "none";

  let sectionarea = document.getElementById("sectionarea");

  sectionarea.style.display = "flex";

  const nome = document.getElementById("inpnome").value;
  let area = document.getElementById("area");
  area.innerHTML = `Olá, ${nome}, Qual Área você deseja seguir:`;
}

function enviar() {
  let sectionarea = document.getElementById("sectionarea");
  sectionarea.style.display = "none";

  let casefrontend = document.getElementById("casefrontend");
  let casebackend = document.getElementById("casebackend");
  let inpfront = document.getElementById("inpfront");
  let inpback = document.getElementById("inpback");

  if (inpfront.checked) {
    casefrontend.style.display = "flex";
  } else if (inpback.checked) {
    casebackend.style.display = "flex";
  } else {
    alert("Selecione uma opção para prosseguir!");
  }
}

function enviar2() {
  let casefrontend = document.getElementById("casefrontend");
  let casebackend = document.getElementById("casebackend");
  if (
    casefrontend.style.display === "flex" ||
    casebackend.style.display === "flex"
  ) {
    casefrontend.style.display = "none";
    casebackend.style.display = "none";
  }
  let especializaroufullstack = document.getElementById(
    "especializaroufullstack"
  );

  especializaroufullstack.style.display = "flex";
}
function enviar3() {
  let inp_especializaroufullstack = document.getElementById(
    "inp_especializaroufullstack"
  ).value;
  p1 = document.getElementById("p1");
  p2 = document.getElementById("p2");
  let btnprosseguir = document.getElementById("prosseguir");
  if (inp_especializaroufullstack === "1") {
    p2.style.display = "none";
    p1.style.display = "flex";
    p1.innerHTML = `Legal, continue estudando com foco e determminação você terá muito sucesso nessa área`;
    btnprosseguir.style.display = "block";
  } else if (inp_especializaroufullstack === "2") {
    p1.style.display = "none";
    p2.style.display = "flex";
    p2.innerHTML = `Muito bom, continue estudando e buscando conhecimentos em outras linguagens e terá muito sucesso.`;
    btnprosseguir.style.display = "block";
  } else {
    alert("ERRO! Certifique-se de preencher o campo corretamente");
  }
}

function prosseguir() {
  let especializaroufullstack = document.getElementById(
    "especializaroufullstack"
  );
  especializaroufullstack.style.display = "none";

  let pergunta = prompt(
    "Tem outra tecnologia que pretende se especializar? (digite 1 para sim e 2 para não)"
  );

  if (pergunta !== "1") {
    let fim = document.getElementById("fim");
    fim.style.display = "flex";
  }

  while (pergunta === "1") {
    let tecnologia = prompt("Legal! Digite Aqui...");
    pergunta = prompt(
      "Tem mais alguma tecnologia que deseja aprender? ('1 para sim e 2 para não)"
    );
  }
}
