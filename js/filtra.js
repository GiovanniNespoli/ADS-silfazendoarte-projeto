var campofiltro = document.querySelector("#filtrar_tabela");

campofiltro.addEventListener("input", function(){
    //captura os nomes dos clientes
    var clientes = document.querySelectorAll(".cliente");

    if(this.value.length > 0){for(var i=0; i< clientes.length; i++){
        var cliente = clientes[i];
        var tdNome = cliente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        //busca com expressoes regulares do JS
        var regex = new RegExp(this.value,"i");

        //verifica se o nome digitado no filtro é igual ao nome da tabela(contador)
        if(nome != this.value){
            //não é a linha digitada
            cliente.classList.add("invisivel");
        } else{
            cliente.classList.remove("invisivel");
        }
    }}else{
        for(var i=0; i < clientes.length; i++){
            var cliente = clientes[i];
            cliente.classList.remove("invisivel");
        }
    }
})