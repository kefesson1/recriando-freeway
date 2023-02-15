//objeto ator
let ator = [
  {
    "yAtor":370,
    "xAtor":90,
    "spdAtor": 3,
    "wAtor":30,
    "hAtor":30,
  }
]

let colisao = false;
let pontos = 0;

//funcionalidades do ator
function mostraAtor (){
  //carrega o avatar
  image(imgAtor, ator[0].xAtor, ator[0].yAtor, ator[0].wAtor, ator[0].hAtor);
}

//movimentacao no teclado
function movimentaAtor(){
  if (keyIsDown(87)){
    ator[0].yAtor -= ator[0].spdAtor;
  } 
  
  if (keyIsDown(83)){
    ator[0].yAtor += ator[0].spdAtor;
  } 
  
  if (keyIsDown(65)){
    ator[0].xAtor -= ator[0].spdAtor;
  } 
  
  if (keyIsDown(68)){
    ator[0].xAtor += ator[0].spdAtor;
  }
  
  //Sistema de Colisao
  for (let i = 0 ; i < carros.length ; i++){
    
    colisao = collideRectCircle(carros[i].xcarro, carros[i].ycarro, carros[i].wcarro, carros[i].hcarro, ator[0].xAtor, ator[0].yAtor, (ator[0].hAtor - 10))
    
    if (colisao){
      somColisao.play();
      voltaInicio();
      if (pontos < 1){
        pontos = 0
      } else{
        pontos -= 1
      }
      
    }
  
  }
  //nao deixa o avatar sair da tela
    if (ator[0].yAtor < 0){
      ator[0].yAtor = 0;
    }
    if (ator[0].yAtor > 370){
      ator[0].yAtor = 370;
    }
    if (ator[0].xAtor < 0){
      ator[0].xAtor = 0;
    }
    if (ator[0].xAtor > 470){
      ator[0].xAtor = 470;
    }
    
  
}

function placar (){
  textAlign(CENTER);
  textSize(30);
  fill(255,140,60);
  text(pontos, width / 5, 29);
}

function marcaPonto(){
  if (ator[0].yAtor < 15){
    somPonto.play();
    pontos += 1;
    voltaInicio()
  }
}

function voltaInicio (){
  ator[0].xAtor = 100;
  ator[0].yAtor = 390;
}




