'use strict'

import funcionarios from "./funcionarios/funcionarios.json" with {type: json}


function criarImagem (srcImagens){
    
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    
    imagem = srcImagens.imagem

    galeria.appendChild(imagem)
}

function carregarImagem (){

    const galeria = document.getElementById('galeria')

    imagens.forEach(criarImagem)

}

carregarImagem ()