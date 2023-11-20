function setup() {
createCanvas(500, 400);
 music. loop();
}

function draw() {
background(imagemDoEspaco);
mostraNave();
mostraMeteoro();
movimentaMeteoro();
movimentaNave();
voltaPosicaoInicialDaNave();
verificaColisao();
incluiPontos();
marcaPonto(); 
}