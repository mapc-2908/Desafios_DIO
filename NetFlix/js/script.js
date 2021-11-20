var slideIndex = 1;

const pasta = "Imagens/";

let array1= new Array("Stranger_Things.jpg", "Cacadores_de_Trolls_Contos_da_Arcadia.jpg", "Perdidos_no_Espaço.jpg" ,"Colin_em_Preto_e_Branco.jpg",
"Cozinhando_o_Impossivel.jpg", "Round6.jpg", "Star_Trek_Discovery.jpg", "Avatar_A_Lenda_de_Aang.jpg", "Madam_C.J._Walker.jpg", "Suits.jpg", "A_Beleza_Secreta_Dos_Animais.jpg", "Familia_Noel.jpg");

let cont = array1.length;

let titulo= new Array("Stranger Things", "Caçadores de Trolls Contos da Arcadia", "Perdidos no Espaço" ,"Colin em Preto e Branco",
"Cozinhando o Impossível", "Round 6", "Star Trek Discovery", "Avatar A Lenda de Aang", "A Vida e a História de Madam C.J. Walker", "Suits", "A Beleza Secreta dos Animais", "Família Noel");

let sinopse= new Array("Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.", "Jim é um garoto de 15 anos que é transformado em um caçador de trolls e defensor dos Trolls do bem, depois de encontrar sem querer um amuleto mágico. Enquanto luta ao lado do seu melhor amigo, Toby, e do Troll sabichão Blinky, ele precisa ao mesmo tempo conciliar os ensaios e deveres de casa da escola.", "Após um pouso forçado em um planeta desconhecido, a família Robinson tenta sobreviver aos perigos que encontra neste novo mundo.", "As experiências vividas por Kaepernick no ensino médio que o levaram a se tornar um ativista.", "Na disputa pelo prêmio de 100 mil dólares, confeiteiros e engenheiros geniais se unem para elaborar criações que, além de deliciosas, devem ser muito resistentes.", "Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais.", "Após um século de isolamento, a Federação e o Império Klingon entram em guerra, e as ações de uma oficial da Frota Estelar estão no centro do conflito.", "Aang é um menino de 12 anos que descobre ser o Avatar, mestre responsável por garantir o equilíbrio entre os quatro elementos e suas respectivas nações, mantendo o planeta em paz.", "Uma afro-americana que venceu a pobreza, construiu um império de produtos de beleza e se tornou a primeira milionária pelo próprio esforço. Baseado em uma história real.", "Mesmo sem se formar e sem licença para advogar, um jovem brilhante impressiona um importante advogado e consegue uma cobiçada posição em sua firma.", "Esta série imersiva segue as criaturas mais magníficas do mundo, registrando momentos nunca antes vistos, dos mais comoventes aos mais chocantes.", "Jules odeia as festas de fim de ano. Mas, quando seu avô fica doente, descobre o legado mágico da família e percebe que é o único que pode salvar o Natal.");



function currentSlide(Nr) {	 
	var Num = Nr;
	var vImagem =  pasta+array1[Nr];
	//document.getElementById('ImgDest').src =  vImagem; 	
	document.getElementById('destaque').style.backgroundImage = "url("+vImagem+")";
	document.getElementById('titulo').innerHTML = titulo[Nr];
	document.getElementById('sinopse').innerHTML = sinopse[Nr];
	document.form.texto.value = Nr;	
}

function comeco(){
	var vImagem =  pasta+array1[0];
	//document.getElementById('ImgDest').src = vImagem;
	document.getElementById('destaque').style.backgroundImage= "url("+vImagem+")";
	document.getElementById('titulo').innerHTML = titulo[0];	
	document.getElementById('sinopse').innerHTML = sinopse[0];	
	document.form.texto.value="0";
}

function mais(){
	document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
	if (document.form.texto.value >= cont){	
		comeco();
	};
}

function menos(){
	document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
	if (document.form.texto.value < 0){
		document.form.texto.value = cont-1;
	};
}

function regular(){
	var X = document.form.texto.value;
	var vImagem =pasta+array1[X];
	//document.getElementById('ImgDest').src = pasta+array1[X];
	document.getElementById('destaque').style.backgroundImage= "url("+vImagem+")";	
	document.getElementById('titulo').innerHTML = titulo[X];
	document.getElementById('sinopse').innerHTML = sinopse[X];	
	setTimeout("regular()", 1);
}


function CargaImgs(){
	var i;  		
	for (i = 0; i < cont; i++){
		document.getElementById("img"+i).src = pasta+array1[i];
	}
   comeco(); 
   regular();	
}


function showSlides_orig(n) {
  var i;  
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
//  var captionText = document.getElementById("caption"); 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt; 
}


/*
<button onclick="myFunction()">Insert a span</button>

function myFunction() {
  var h = document.getElementById("myH2");
  h.insertAdjacentHTML("afterend", "<span style='color:red'>My span</span>");
}

Obrigatório. Uma posição em relação ao elemento.
Valores legais:
"afterbegin" - após o início do elemento (como o primeiro filho)
"afterend" - após o elemento
"beforebegin" - antes do elemento
"beforeend" - antes do final do elemento (como o último filho)


function myFunction() {
  var para = document.createElement("P");
  para.innerHTML = "This is a paragraph.";
  document.getElementById("myDIV").appendChild(para);
}



*/