var titulo = document.getElementById("titulo");
var linguagemSkill = document.getElementById("linguagemSkill");
var categorias = document.getElementById("categorias");
var descricao = document.getElementById("descricao");
var videoyoutube = document.getElementById("videoyoutube");
var searchbar = document.getElementById("searchbar");

var criarCartao = () => {
  var cartao = {
    titulo: titulo.value,
    linguagemSkill: linguagemSkill.value,
    categorias: categorias.options[categorias.selectedIndex].text,
    descricao: descricao.value,
    videoyoutube: videoyoutube.value,
  };
  novoCartao(cartao);
  mostrarCartao();
};

var criarTemplate = (cartao) => {
  var criarDiv = document.createElement("div");
  criarDiv.className = "cartoesDiv";
  criarDiv.innerHTML = `

<span id= "tituloTemplat">titulo: ${cartao.titulo}</span>
<span id= "linguagemSkillTemplat">LinguagemSkill: ${cartao.linguagemSkill}</span>
<span id= "categoriaTemplat">categorias: ${cartao.categorias}</span>
<span id= "descricaoTemplat">descricao: ${cartao.descricao}</span>
<div id="botoesCard">
<button id="Excluir" id="btnDelete" onClick="apagarItem('${cartao.titulo}')">Excluir</button>
<button id="Video" id="btnVideo" onClick="window.location='${cartao.videoyoutube}';">Video</button>
</div>

`;
  document.getElementById("cartaoespaco").appendChild(criarDiv);
};
const limpar = () => {
  let campo = document.querySelectorAll("#cartaoespaco>.cartoesDiv");
  campo.forEach((item) => item.remove(item.node));
};

var mostrarCartao = () => {
  var buscarCartao = JSON.parse(localStorage.getItem("Dicas"));
  contarCartoes();
  limpar();
  buscarCartao.forEach(criarTemplate);
};

var btn2 = document.getElementById("bot2");
btn2.addEventListener("click", criarCartao);

function apagarItem(item) {
  var buscarCartao = JSON.parse(localStorage.getItem("Dicas"));
  var resultado = buscarCartao.findIndex((titulo) => titulo.titulo == item);
  buscarCartao.splice(resultado, 1);
  localStorage.setItem("Dicas", JSON.stringify(buscarCartao));
  mostrarCartao();
}
var verificarBanco = () => JSON.parse(localStorage.getItem("Dicas")) ?? [];
var salvarBanco = (novoCartao) =>
  localStorage.setItem("Dicas", JSON.stringify(novoCartao));

var novoCartao = (novoCartao) => {
  var cartao = verificarBanco();
  cartao.push(novoCartao);
  salvarBanco(cartao);
};
var contarCartoes = () => {
  var lerBanco = JSON.parse(localStorage.getItem("Dicas"));
  let front = lerBanco.filter((cartao) => {
    return cartao.categorias == "Front-End";
  });

  var back = lerBanco.filter((cartao) => {
    return cartao.categorias == "Back-End";
  });

  var full = lerBanco.filter((cartao) => {
    return cartao.categorias == "Full-Stack";
  });

  var soft = lerBanco.filter((cartao) => {
    return cartao.categorias == "Soft-Skill";
  });

  document.getElementById("TotalCount").textContent =
    front.length + back.length + full.length + soft.length;
  document.getElementById("FrontCont").textContent = front.length;
  document.getElementById("BackCont").textContent = back.length;
  document.getElementById("FullCont").textContent = full.length;
  document.getElementById("Soft").textContent = soft.length;
};
function pesquisar() {
  var textoFilter = searchbar.value.toLowerCase();
  var size = document.getElementsByClassName("cartoesDiv").length;

  for (item = 0; item < size; item++) {
    if (
      document
        .getElementsByClassName("cartoesDiv")
        [item].innerHTML.toLocaleLowerCase()
        .indexOf(textoFilter) > -1
    ) {
      document.getElementsByClassName("cartoesDiv")[item].style.display = "";
    } else {
      document.getElementsByClassName("cartoesDiv")[item].style.display =
        "none";
    }
  }
}