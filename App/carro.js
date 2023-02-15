//codigo dos carros

let carros = [
  {
    "ycarro":50,
    "spdcarro": 4.5,
    "xcarro": 600,
    "wcarro": 80,
    "hcarro": 30,
  },
  {
    "ycarro":100,
    "spdcarro": 3.7,
    "xcarro": 600,
    "wcarro": 40,
    "hcarro": 30,
  },
  {
    "ycarro":150,
    "spdcarro": 6.3,
    "xcarro": 600,
    "wcarro": 50,
    "hcarro": 40,
  },
  {
    "ycarro":210,
    "spdcarro": 5.2,
    "xcarro": 600,
    "wcarro": 70,
    "hcarro": 40,
  },
  {
    "ycarro":260,
    "spdcarro": 3.2,
    "xcarro": 600,
    "wcarro": 40,
    "hcarro": 50,
  },
  {
    "ycarro":320,
    "spdcarro": 2.3,
    "xcarro": 600,
    "wcarro": 50,
    "hcarro": 30,
  },
]



//funcionalidades dos carros
function mostraCarro (){
  for(let i=0 ; i < carros.length ; i++){ 
    
    //carrega o carro na tela
    image(imgCarros[i], carros[i].xcarro, carros[i].ycarro, carros[i].wcarro, carros[i].hcarro);
    
    //faz o carro se movimentar
    carros[i].xcarro -= carros[i].spdcarro;
    
    //deixa o carro em loop
    if (carros[i].xcarro < - 50){
      carros[i].xcarro = 600;
    }
  }
}






