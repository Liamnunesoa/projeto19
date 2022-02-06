var foguete;
var fogueteImg;
var asteroide;
var asteroideImg
var espaço;
var espaçoImg;
var gameState = "play";
var pontuacao=0
var moedas;
var moedasImg
function preload(){
fogueteImg=loadImage("foguete.png");
espaçoImg=loadImage("espaco-sideral.png");
asteroideImg=loadImage("asteroide.png");
moedasImg=loadImage("moeda.png");



}

function setup() {
 createCanvas(600,600);
 espaço=createSprite(300,300);
 espaço.addImage("sideral", espaçoImg);
 espaço.scale=2.1;
 espaço.velocityY=1;

 foguete= createSprite(200,200,50,50);
 foguete.addImage("kkkk",fogueteImg);
 foguete.scale=0.06;




}

function draw() {
 background(200);
 if(espaço.y > 390){
     espaço.y=300
 }
 if(gameState==="play"){
   foguete.y=mouseY;
   foguete.x=mouseX;

   if(pontuacao===20){
       gameState="fim"
   }
   

   }
   

   
   
   

   criarmoedas();
   criarasteroides();
   drawSprites();
}
 if(gameState==="fim"){
    foguete.y=200
    foguete.x=200
    stroke("yellow");
     fill("yellow");
     textsize(30);
     text("Fim de jogo", 230,250);
 }

 function criarasteroides(){
    if(frameCount % 50===0){
        asteroide=createSprite(200,50);
        asteroide.x=Math.round(random(100,600));
        asteroide.velocityY=3;
        asteroide.addImage("cometa", asteroideImg);
        asteroide.scale=0.1;
        asteroide.lifetime=390;
    }
 }
 function criarmoedas(){
        if(frameCount % 100===0){
       moedas=createSprite(100,50);
       moedas.x=Math.round(random(120,500))
       moedas.velocityY=1;
       moedas.addImage("dinheiro", moedasImg);
       moedas.scale=0.08
        }
 }







 
