let xMeteoro = 85;
let yMeteoro = 366;
let colisao = false;
let meusPontos = 0;

function mostraMeteoro(){
  image(imagemDoMeteoro, xMeteoro, yMeteoro, 30, 30);
}

function movimentaMeteoro(){
  if (keyIsDown(UP_ARROW)){
    yMeteoro -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yMeteoro += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMover()){
      xMeteoro -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMover()){
      xMeteoro += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemNaves.length; i++){
    colisao = collideRectCircle(xNaves[i], yNaves[i], comprimentoNave, alturaNave, xMeteoro, yMeteoro, 15)
    if (colisao){
      voltaMeteoroParaPosicaoInicial();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaMeteoroParaPosicaoInicial(){
  yMeteoro = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yMeteoro < 15){
    meusPontos += 1;
    voltaMeteoroParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yMeteoro < 366;
}