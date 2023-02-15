// imagens e sons do jogo 

let imgEstrada;
let imgAtor;
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imgEstrada = loadImage("assets/imagens/estrada.png");
  imgAtor = loadImage("assets/imagens/ator-1.png");
  imgCarros = [loadImage("assets/imagens/carro-1.png"),loadImage("assets/imagens/carro-2.png"),loadImage("assets/imagens/carro-3.png"), loadImage("assets/imagens/carro-2.png"),loadImage("assets/imagens/carro-3.png"), loadImage("assets/imagens/carro-1.png")]
  somTrilha = loadSound("assets/sons/trilha.mp3");
  somColisao = loadSound("assets/sons/colidiu.mp3")
  somPonto = loadSound("assets/sons/pontos.wav")
}