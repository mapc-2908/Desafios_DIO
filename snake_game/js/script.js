let canvas  = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 36;
let direction = 'right';
let score;
let jogo;
let horaIni;
let horaFim;
let intervalo;

let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}; 

let snake = [];
snake[0] =	{	
/* 
	x: 8 * box,
	y: 8 * box
*/	
	x: 7 * box,
	y: 7 * box	
};

const zeroPad = (num, places) => String(num).padStart(places, '0');

const speed = 150;

const foodImg = new Image();  
foodImg.src = "img/fruit1.ico"; 

const snakeImg = new Image();  
snakeImg.src = "img/ksnake.png"; 

const corpoImg = new Image();
corpoImg.src = "img/ball8a.ico"; 
 
//Criação da tela de fundo do jogo
function criarBG(){
   //context.drawImage(ground, 0, 0);
	context.fillStyle = 'rgb(255 , 253 , 208)';
	context.fillRect(0, 0, 16*box, 16*box);
};

function criarCobrinha(){
	for(i=0; i<snake.length; i++){

		if (i > 0){
			context.drawImage(corpoImg, snake[i].x, snake[i].y);			
/* 		context.fillStyle = "rgb( 65 , 105 , 225)";
		context.fillRect(snake[i].x, snake[i].y, box, box);	 */		
		}
		else{
			context.drawImage(snakeImg, snake[i].x, snake[i].y);		
		};
	};	
	
};

function drawFood(){ 	
/* 	context.fillStyle = "blue";
	context.fillRect(food.x, food.y, box, box);  */	
	context.drawImage(foodImg, food.x, food.y); 	
};

document.addEventListener('keydown', direcao);

function direcao(event){
	if(event.keyCode == 37 && direction != "right"){ direction = "left" };
	if(event.keyCode == 38 && direction != "down"){ direction = "up" };
	if(event.keyCode == 39 && direction != "left"){ direction = "right" };
	if(event.keyCode == 40 && direction != "up"){ direction = "down" };
};

function inicio(){	
	score = 0;	
	horaIni = new Date();
	jogo = setInterval(iniciarJogo, speed);
}

function iniciarJogo(){	

	if(snake[0].x > 15*box && direction == "right"){ snake[0].x = 0 };
	if(snake[0].x < 0 && direction == "left"){ snake[0].x = 16*box };
	if(snake[0].y > 15*box && direction == "down"){ snake[0].y = 0 };
	if(snake[0].y < 0 && direction == "up"){ snake[0].y = 16*box };
	
	for(i = 1; i< snake.length; i++){		
		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
			clearInterval(jogo);	
			alert("Fim de Jogo!!");
		};		
	};
	
 	horaFim = new Date();	
	criarBG();
	criarCobrinha();
	drawFood();
	
	intervalo = (horaFim - horaIni)  ;
	document.getElementById("tempo").innerHTML= millisecondsToStr(intervalo);	

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	
	if(direction == "right"){ snakeX += box; };
	if(direction == "left"){ snakeX -= box; };
	if(direction == "up"){ snakeY -= box; };
	if(direction == "down"){ snakeY += box; };
	
	if( snakeX != food.x || snakeY != food.y ){		
		snake.pop();
	}
	else{
		score++;
		food.x = Math.floor(Math.random() * 15 + 1) * box,
		food.y = Math.floor(Math.random() * 15 + 1) * box	 
	};
		
	let newHead = {
		x: snakeX,
		y: snakeY
	};	
	
	snake.unshift(newHead);

	document.getElementById("placar").innerHTML= score;	

};

function gameOver() {
   context.fillStyle = 'navy';
   context.textBaseline = 'middle'; 
   context.textAlign = 'center'; 
   context.font = 'normal bold 22px serif';
    
   context.fillText('Game over', canvas.width/2, canvas.height/2);
	clearInterval(jogo);	
};

function millisecondsToStr (milliseconds) {
// TIP: to find current time in milliseconds, use:
// var  current_time_milliseconds = new Date().getTime();


 	var temp = Math.floor(milliseconds / 1000);
/*	var years = Math.floor(temp / 31536000);
	var days = Math.floor((temp %= 31536000) / 86400);	 */
	var hours 	= zeroPad(Math.floor((temp %= 86400) / 3600), 2);
	var minutes = zeroPad(Math.floor((temp %= 3600) / 60), 2);
	var seconds = zeroPad(temp % 60, 2);	

	return hours+":"+minutes+":"+seconds;	
}

/* let jogo = setInterval(iniciarJogo, 150); */