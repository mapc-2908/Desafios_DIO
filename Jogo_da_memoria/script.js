let order = [];
let clickedOrder = [];
let score = 0;
let velocidade;
let texto;
let opcao;  

/*
 *  nivel de dificuldade 
 *  1- fácil
 *  2- médio
 *  3- difícil
 * */

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const azul		= document.querySelector('.blue');
const vermelho	= document.querySelector('.red');
const verde		= document.querySelector('.green');
const amarelo	= document.querySelector('.yellow');

//cria ordem aletoria de cores
let shuffleOrder = () => {
		
   let colorOrder = Math.floor(Math.random() * 4);
   order[order.length] = colorOrder;
   clickedOrder = [];

   for(let i in order) {
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
		dicaDasCores(order[i]);				
   }
}

//acende a proxima cor
let lightColor = (element, number) => {
   number = number * 500;
   setTimeout(() => {
      //element.classList.remove('selected');
      element.classList.add('selected');
   }, number - velocidade);
   setTimeout(() => {
      element.classList.remove('selected');
      //element.classList.add('selected');
   });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {	
	let elemento = document.getElementById("placar");	
   for(let i in clickedOrder) {
      if(clickedOrder[i] != order[i]) {
         gameOver();
         break;
      }
   }
   if(clickedOrder.length == order.length) {
		//document.getElementById("placar").insertAdjacentHTML("afterend", 'Pontuação: '+score); 
		document.getElementById("placar").innerHTML = 'Pontos:  '+score;
      nextLevel();
   }
}

//funcao para o clique do usuario
let click = (color) => {
   clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');
	
   setTimeout(() => {
      createColorElement(color).classList.remove('selected');
		removeDicas();
      checkOrder();
   }, velocidade);
}

//funcao que retorna a cor
let createColorElement = (color) => {
   if(color == 0) {
		return verde;
   } else if(color == 1) {
      return vermelho;
   } else if (color == 2) {
      return amarelo;
   } else if (color == 3) {
      return azul;
   }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
   score++;
   shuffleOrder();
}

//funcao para game over
let gameOver = () => {
	//alert(`Pontos: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`); 
	alert('Fim do jogo!');	
	document.getElementById('cores').innerHTML = 'Sequência: ';
	document.getElementById('op_1').checked = false;
	document.getElementById('op_2').checked = false;
	document.getElementById('op_3').checked = false;
	order=[];
	clickedOrder=[];
	playGame();
}

//funcao de inicio do jogo
let playGame = () => { 	
	score=0;
	opcao=0;
	document.getElementById('cores').innerHTML = 'Sequência: ';
		
   if(document.getElementById('op_1').checked){
		velocidade= 250; 
		opcao=1;
   }else if(document.getElementById('op_2').checked){
		velocidade= 230;
		opcao=1;		
   }else if(document.getElementById('op_3').checked){
		velocidade= 210;
		opcao=1;		
   }else{
		alert("Selecione uma opção");
		opcao=0;
	}
	
	if (opcao != 0){
		alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
		nextLevel();
	}
}

//exibe o nome das cores na sequencia a ser clicada
let dicaDasCores = (cor) =>{
/* 	
	// Create the new node to insert
	let newNode = document.createElement("span");
	newNode.setAttribute("id", "cores");

	// Get a reference to the parent node
	//let parentDiv = document.getElementById("pontos").parentNode;
	let parentDiv = document.getElementById("_rodape");
	let theFirstChild = parentDiv.firstChild;
	
 	let sp2 = document.getElementById('cor');	*/

	if(cor === 0){
		//texto = document.createTextNode('verde, ');
		texto = 'verde, ';
	}
	if(cor === 1){
		texto = 'vermelho, ';			
	}
	if(cor === 2){
		texto = 'amarelo, ';
	}	
	if(cor === 3){
		texto = 'azul, ';			
	}
	
	document.getElementById('cores').innerHTML += texto;
	
/* 
	newNode.appendChild(texto);	
	parentDiv.insertBefore(newNode, sp2.nextSibling); 
	
	//parentDiv.insertBefore(newNode, sp2);	
	//document.getElementById('pontos').appendChild(texto); */
}


//remove a dica da sequencia das cores
let removeDicas = () =>{
	document.getElementById('cores').innerHTML = 'Sequência: ';
/* 	if ( document.getElementById('cores') ){
		document.getElementById('cores').remove();
	} */
}

//eventos de clique para as cores
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);


//inicio do jogo
//playGame();