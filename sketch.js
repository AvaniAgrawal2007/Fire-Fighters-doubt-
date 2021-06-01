var formBg, gameImage, roomImg, gamePoster;
var PC, gameState;
var moana, minion, elsa, tom, jerry, oggy;
var moanaImg, minionImg, elsaImg, tomImg, jerryImg, oggyImg;
var allPlayers;
var form, player, game;
var database;

function preload(){
roomImg = loadImage("images/others/room.jpeg")
formBg = loadImage("images/others/bgForm.jpg")
arrowkeyImg = loadImage("images/others/arrow keys.png")
gameImage = loadImage("images/others/intro bg image.jpg")
moanaImg = loadImage("images/characters/moana.png")
minionImg = loadImage("images/characters/minion.png")
elsaImg = loadImage("images/characters/elsa.png")
tomImg = loadImage("images/characters/tom.png")
jerryImg = loadImage("images/characters/jerry.png")
oggyImg = loadImage("images/characters/oggy.png")
}

function setup() {
 createCanvas(displayWidth-10,displayHeight-10)
 database = firebase.database();
 form = new Form()
 player = new Playerclass()
 //game = new Game()

}

function draw() {
  background("cyan")
  form.display()
  //game.display()
  drawSprites();
}