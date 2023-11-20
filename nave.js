let xNaves = [600, 600, 600, 600, 600, 600];
let yNaves = [40, 96, 150, 180, 215,250];
let velocidadeNaves = [2, 2.5, 3.2, 3.8, 4.2, 4.8];
let comprimentoNave = 50;
let alturaNave = 40;

function mostraNave(){
  for (let i = 0; i < imagemNaves.length; i++){
    image(imagemNaves[i], xNaves[i], yNaves[i], comprimentoNave, alturaNave);
  }
}

function movimentaNave(){
  for (let i = 0; i < imagemNaves.length; i++){
    xNaves[i] -= velocidadeNaves[i];
  }
}

function voltaPosicaoInicialDaNave(){
  for (let i = 0; i < imagemNaves.length; i++){
    if (passouTodaATela(xNaves[i])){
      xNaves[i] = 600;
    }
  }
}

function passouTodaATela(xNave){
  return xNave < - 50;
}