
window.onload=function(){

    const productList = document.querySelectorAll("#content-produtos");
    const basketList = document.getElementById("cestaDoCliente");
    const total= document.querySelector("#mostraTotalCompra");

    const itensGuardados=[];
    
    var somaTotal=0;

    productList.forEach(function(roster){
        
        roster.addEventListener('click', function(elemento){

            if(itensGuardados==elemento.target.textContent){
                 
                alert("O item já está na cesta");

            } else{
                
                let listinha = document.createElement('li');                                
                basketList.appendChild(listinha).textContent = elemento.target.innerHTML;
                basketList.appendChild(listinha).setAttribute('data-preco', elemento.target.dataset.preco);


                somaTotal += Number(elemento.target.dataset.preco);
                total.value = somaTotal.toLocaleString('pt-BR',
                {style:'currency', currency:'BRL'});
            }

        })

    })

}
