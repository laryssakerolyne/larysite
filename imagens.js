let imagemDoEspaco;
let imagemDoMeteoro;
let imagemNave;
let imagemNave2;
let imagemNave3;
let imagemNave4;
let imagemNave5;
let imagemNave6;
let music;

function preload(){
imagemDoEspaco = loadImage("imagem/espaco.jpg");
imagemDoMeteoro = loadImage("imagem/meteoro.png");
imagemNave = loadImage("imagem/nave.png");
imagemNave2 = loadImage("imagem/nave1.png");
imagemNave3 = loadImage("imagem/nave2.png");
imagemNave4 = loadImage("imagem/nave3.png");
imagemNave5 = loadImage("imagem/nave4.png");
imagemNave6 = loadImage("imagem/nave5.png");
imagemNaves = [imagemNave, imagemNave2, imagemNave3, imagemNave4, imagemNave5, imagemNave6]
music = loadSound("sons/sons.mp3");
}