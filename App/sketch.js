function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  placar();
  marcaPonto();
}



