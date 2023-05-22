let nomeProduto = document.getElementsByName("nomeProduto");
let nomeInsumo = document.getElementsByName("nomeInsumo");
let qntdInsumo = document.getElementsByName("qntdInsumo");
let qntdEmbalagem = document.getElementsByName("qntdEmbalagem");
let valor = document.getElementsByName("valorInsumo");
let lucro = document.getElementsByName("lucro");

let valorTotal = document.getElementsByClassName("valorTotal");
let valorArredondado = document.getElementsByClassName("valorArredondado");
let descontoAplicado = document.getElementsByClassName("descontoAplicado");
let valorSemDesconto = document.getElementsByClassName("valorSemDesconto");

function
totalValorPorInsumo() {
    let totalValorPorInsumo = [];

    for (let index = 0; index < nomeInsumo.length; index++) {
        let valorPorUnidade = valor[index].value / qntdEmbalagem[index].value;
        totalValorPorInsumo.push(valorPorUnidade * qntdInsumo[index].value);
    }

    console.log(totalValorPorInsumo);

    var soma = 0;
    for (var i = 0; i < totalValorPorInsumo.length; i++) {
        soma += totalValorPorInsumo[i];
    }

    console.log("SOMA",soma);

    return soma
}

function calcular() {
    event.preventDefault();

    const lucroTotal = (totalValorPorInsumo() * (lucro[0].value / 100)) + totalValorPorInsumo();

    valorTotal[0].innerHTML = `${lucroTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    valorArredondado[0].innerHTML = `${Math.ceil(lucroTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    descontoAplicado[0].innerHTML = `${(totalValorPorInsumo() * (lucro[0].value / 100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    valorSemDesconto[0].innerHTML = `${totalValorPorInsumo().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`

}

function addInputs() {
    event.preventDefault();

    let placeHolder1 = [`Nome do insumo`, `Quantidade do insumo para o produto`]
    let name1 = ["nomeInsumo", "qntdInsumo"]

    let placeHolder2 = [`Quantidade do insumo na embalagem de comprar`, `Valor do insumo`]
    let name2 = [`qntdEmbalagem`, `valorInsumo`]

    // Cria três novos inputs
    for (var i = 0; i < 2; i++) {
        var input = document.createElement("input");

        input.type = "text";
        input.placeholder = placeHolder1[i]
        input.name = name1[i]
        input.className = "margin"

        // Adiciona cada novo input ao elemento pai
        var div = document.getElementById("inputs1");
        div.appendChild(input);
    }

    for (var i = 0; i < 2; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = placeHolder2[i]
        input.name = name2[i]
        input.className = "margin"

        // Adiciona cada novo input ao elemento pai
        var div = document.getElementById("inputs2");
        div.appendChild(input);
    }
}