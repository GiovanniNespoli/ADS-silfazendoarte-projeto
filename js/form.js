
//---------------------------------------
//Mexendo com eventos
//---------------------------------------

/*//funcão nomeada
  titulo.addEventListener("click", mensagem)

  function mensagem(){
    alert("vagaba");
    console.log("O TITUlO FOI CLICADO VAGABUNDA");
  }*/

//Função anônima
titulo.addEventListener("click", function () {
  alert("vagaba anonima");
  console.log("O TÍTUlO FOI CLICADO ANONIMAMENTE VAGABUNDA");
});


//----------------------------------------
//ADD na tabela
var botaoAdd = document.querySelector("#adicionar-encomenda");


botaoAdd.addEventListener("click", function (event) {
  event.preventDefault();
  
  

  //captura o formulario
  var form = document.querySelector("#form-add");

    //informações da formulário
  var encomenda = obtemEncomenda(form);  

  //valida os campos preenchidos
  var validacao = validaEncomenda(encomenda);

  if(validacao.length > 0){
    exibeMensagem(validacao);
    return;
  }

  //adiciona encomenda na tabela
  adicionaEncomendaNaTabela(encomenda)


  //limpa o formulário
  form.reset();

  //limpa os erros
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  

});

//função add encomendas na tabela
function adicionaEncomendaNaTabela(encomenda){
  var encomendaTr = montaTr(encomenda);
  var tabela = document.querySelector("#tabela-clientes");
  tabela.appendChild(encomendaTr);
}

function obtemEncomenda(form){ //armazena dados

  var encomenda = {
    nome : form.Nome.value,
    produto : form.Produto.value,
    quantidade : form.Quantidade.value,
    unitario : form.Unitario.value,
  }

  return encomenda;
}




function montaTr(encomenda){ //cria e monta linhas

  var encomendaTr = document.createElement("tr");

  //monta nova linha
  encomendaTr.appendChild(montaTd(encomenda.nome));
  encomendaTr.appendChild(montaTd(encomenda.produto));
  encomendaTr.appendChild(montaTd(encomenda.quantidade));
  encomendaTr.appendChild(montaTd(formataValor(encomenda.unitario)));
  encomendaTr.appendChild(montaTd(calculaTotal(encomenda.quantidade, encomenda.unitario)));

  return encomendaTr;

}

function montaTd(dados){ //metodo exclusivo para criar colunas
  var td = document.createElement("td");
  td.textContent = dados;

  return td;
}

//função para validar os dados preenchidos no formulário
function validaEncomenda(encomenda){
  var erros = [];

  if(!validaQtde(encomenda.quantidade)){
      erros.push("A quantidade é inválida.");
  }

  if(!validaUnitario(encomenda.unitario)){
      erros.push("O valor é inválido.");
  }

  if (!validaNome(encomenda.nome)){
    erros.push("O nome não é válido.");
  }

  if (!validaProduto(encomenda.produto)){
    erros.push("O produto não é válido.");
  }

  return erros;
}

//função para exibir os erros de preenchimento do usuario
function exibeMensagem(erros){
 
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
