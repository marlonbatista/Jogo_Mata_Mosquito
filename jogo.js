var altura = 0
var largura = 0
var vidas = 1
var tempo =  15

var criaMosquitoTempo = 1500
//recebendo os parâmetros de index.html
var nivel =window.location.search//mostra apenas a string dentro da url
nivel = nivel.replace('?','')
function ajustaTamanhoPalcoJogo(){
	 altura = window.innerHeight
	 largura = window.innerWidth
	 console.log(largura,altura)
	 if(nivel == 'normal'){
	 	//atribuimos o tempo de 1500

		 criaMosquitoTempo = 1500

	 	}else if(nivel == 'dificil'){
	 		//atribuimos o tempo de 1000

			 criaMosquitoTempo = 1000

	 		}else if(nivel == 'chucknorris'){
	 			// atribuimos o tempo de 750	

				criaMosquitoTempo = 750
	 			}

	}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){
	tempo -= 1

	if(tempo<0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)//Para a contagem e limpa a função quando chegar na vitoria
		window.location.href = 'vitoria.html'//vai redicionar para a página de Game Over
	}
	else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
	
},1000)

function posicaoRandomica(){

	//remover mosquito anterior caso exista
	//se o elemento retornar "true" então é removido, se não ele cria todos os elementos
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas>3){
			window.location.href = 'fim_de_jogo.html'//vai redicionar para a página de Game Over
		}
		else{

				document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	
	}


	//Definindo posição random do mosquito

var posicaoX = Math.floor(Math.random() * largura) - 90//Math.floor serve para arredondar para menos o nº de casas
var posicaoY = Math.floor(Math.random() * altura) - 90// a modo que elimine as casas decimais
//Multiplicando Math.randon()*largura, faz com que a largura seja o tamanho máximo para o random
//Multiplicando Math.randon()*altura, faz com que a altura seja o tamanho máximo para o random

	if(posicaoX<0){
		posicaoX = 0
	}
	else{
		posicaoX = posicaoX
	}
	if(posicaoY<0){
		posicaoY = 0
	}
	else{
		posicaoY = posicaoY
	}


console.log(posicaoX,posicaoY)
	// Criando o elemento html
var mosquito = document.createElement('img')
mosquito.src = "imagens/mosquito.png"
//Aqui é chamando a função para que indique a classe
mosquito.className = tamanhoAleatorio()+' '+ladoAleatorio()

mosquito.style.left = posicaoX+'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito' // identificação do item que está de repetindo
mosquito.onclick=function(){
	this.remove();
}
document.body.appendChild(mosquito)
	
	
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	console.log(classe)

	switch(classe){
		case 0:
		return 'mosquito1'
	

		case 1:
		return 'mosquito2'
		

		case 2:
		return 'mosquito3'
		
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
		return 'ladoA'
	

		case 1:
		return 'ladoB'
		
		
	}
}

