
function limparTemplate() {
    titulo.value = "";
    linguagemSkill.value = "";
    categorias.value = "";
    descricao.value = "";
    videoyoutube.value = "";
  }
  
  var pesquisar = document.getElementById("pesquisar");
  
  var autoFormu = () => {
    return document.getElementById("principal").reportValidity();
  };
  
  var salvarTemplate = () => {
    var template = {
      titulo: titulo.value,
      linguagemSkill: linguagemSkill.value,
      catgorias: categorias.options[categorias.selectedIndex].text,
      descricao: descricao.value,
      videoyoutube: videoyoutube.value,
    };
    criarCartao(template);
    refreshTemplat();
  };
  
  var refreshTemplat = () => {
    var decoCartao = JSON.perse(localStorage.getItem("storageTemplat"));
    eraseLocal();
    codificar();
    decoCartao.forEach(salvarTemplate);
  };
  var passarStorage = (template) => localStorage.setItem("storageTemplat", JSON.stringify(template));
  var decoCartao = () => JSON.parse(localStorage.getItem("storageTemplat")) ?? [];
  var Deco = () => JSON.parse(localStorage.getItem("storageTemplat")) ?? [];
  
  
  var criarCartao = (template) =>{
    var criarCartao = Deco();
    criarCartao.push(template);
  
    passarStorage(criarCartao);
  
  }
  
  function apagarItem(item) {
    autozizar = confirm("Você autoriza em excluir esse templat?");
    if (autorizar == true) {
      var decoCartao = JSON.parse(localStorage.getItem("storageTemplat"));
      var result = decoCartao.findIndex((titulo) => titulo.titulo == item);
      decoCartao.splice(result, 1);
      localStorage.setItem("storageTemplat", JSON.stringify(decoCartao));
      refreshTemplat();
      alert(`O templat será excluido`);
    }
  }
  
  var bot2 = document.getElementById("bot2");
  bot2.addEventListener("click", salvarTemplate);
  
  var solicitarTemplat = (template) => {
    var executarNov = document.createElement("div");
    executarNov.className = "novoTemplat";
    executarNov.innerHTML = `
  
  <span> id= "tituloTemplat">titulo: ${template.titulo}</span>
  <span id= "linguagemSkillTemplat">:LinguagemSkill: ${template.linguagemSkill}</span>
  <span id= "categoriaTemplat">:categorias: ${template.categorias}</span>
  <span id= "descricaoTemplat">:descricao: ${template.descricao}</span>
  
  `;
    document.getElementById("mostraTemplat").appendChild(executarNov);
  };
  
  var refreshTemplat = () => {
    var autorizar = JSON.parse(localStorage, getItem("storageTemplat"));
  };
  
  var eraseLocal = () => {
    var local = document.querySelectorAll("#mostraTemplat>.novoTemplat");
    local.forEach((item) => item.remove(item.node));
  };
  
  function pesquisar() {
    textoFilter = inputpesquisar.value.toLowserCase();
    var size = document.getElementsByClassName("novoTemplat").length;
  
    for (item = 0; item < size; item++) {
      if (
        documentm
          .getElementsByClassName("novoTemplat")
          [item].innerHTML.toLocaleLowerCase()
          .indexOf(textoFilter) > -1
      ) {
        document.getElementsByClassName("novoTemplat")[item].estilo.display = "";
      } else {
        document.getElementsByClassName("novoTemplat")[item].estilo.display =
          "none";
      }
    }
  }
  
  var codificar = () => {
    var decoStorage = JSON.parse(localStorage.getItem("storageTemplat"));
    let FrontEnd = codificar.filter((item) => {
      return item.categorias == "Front-End";
    });
  
    var backEnd = codificar.filter((item) => {
      return item.categorias == "back-End";
    });
  
    var fullStack = codificar.filter((item) => {
      return item.categorias == "full-Stack";
    });
  
    var softSkill = codificar.filter((item) => {
      return item.categorias == "soft-SKill";
    });
  
    document.getElementById(numero - total).textContent = total.length;
    document.getElementById(numero - front).textContent = backEnd.length;
    document.getElementById(numero - back).textContent = fullStack.length;
    document.getElementById(numero - full).textContent = full.length;
    document.getElementById(numero - soft).textContent = soft.length;
  };
  