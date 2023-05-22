var botaoadicionar = document.querySelector("#buscar-encomendas");

botaoadicionar.addEventListener("click", function(){
console.log("buscando encomendas");

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/encomendas_web");
xhr.addEventListener("load", function(){
    var erroajax = document.querySelector("#erro-ajax");
//verifica se a conexão foi feita com sucesso
    if(xhr.status == 200){
        erroajax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var encomendas = JSON.parse(resposta);
        console.log("certinho");

        encomendas.forEach(function(encomenda){
            adicionaEncomendaNaTabela(encomenda);
        });
    }else{
        //deu erro, printa o erro
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroajax.classList.remove("invisivel");
    }
});
xhr.send();

});