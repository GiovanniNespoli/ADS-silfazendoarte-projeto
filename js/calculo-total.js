//Altera o título da tabela
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

//Captura os dados de todos os clientes
var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {
  /*================================================================
        ROTINA DE CÁLCULO DO VALOR TOTAL POR ENCOMENDA
    ==================================================================*/

  //Captura a QUANTIDADE encomendada por cada cliente
  var qtde = clientes[i].querySelector(".info-qtde").textContent;

  //Captura o VALOR UNITÁRIO de cada encomenda
  var unitario = clientes[i].querySelector(".info-valor").textContent;

  //Verifica se a QUANTIDADE recebida é válida
  if (!validaQtde(qtde)) {
    clientes[i].querySelector(".info-total").textContent =
      "Quantidade inválida!";
    //Colore a fonte dessa linha na cor vermelha
    clientes[i].classList.add("erro");

  } else {
    //Verifica se o VALOR UNITÁRIO é válido
    if (!validaUnitario(unitario)) {
      clientes[i].querySelector(".info-total").textContent =
        "Valor unitário é inválido!";
      //Colore o fundo dessa linha na cor light coral
      clientes[i].classList.add("erro");
    } else {
      //Formata o VALOR UNITÁRIO
      var unitFormat = parseFloat(unitario);
      clientes[i].querySelector(".info-valor").textContent =
        unitFormat.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

      //Calcula o VALOR TOTAL e exibe na tabela
      var total = qtde * unitario;
      //clientes[i].querySelector(".info-total").textContent = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      clientes[i].querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
        
    }
  }
}

//estilizar msg de erroo

//formatação de valor
function formataValor(valor){
  var valor = parseFloat(valor);
 

  return  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });;
}

function calculaTotal(qtde, unitario){
  var total = 0;

  total = parseInt(qtde) * parseFloat(unitario);

  return formataValor(total);
}

//validadr Quantidade
function validaQtde(qtde){
  if((!isNaN(qtde)) && (qtde>0) && (qtde<20) && qtde !=null){
    return true;
  } else{
    return false;
  }
}

//validar unitario
function validaUnitario(unitario){
  if((!isNaN(unitario)) && (unitario>0) && unitario != null){
    return true;
  } else{
    return false;
  }
}

//validar nome
function validaNome(nome){
  const regex = /^[A-Za-z]+$/;
  if(regex.test(nome) && nome != null){
    return true;
  } else{
    return false;
  }
}

//validar produto
function validaProduto(produto){
  if(isNaN(produto)){
    return true;
  } else{
    return false;
}

}
