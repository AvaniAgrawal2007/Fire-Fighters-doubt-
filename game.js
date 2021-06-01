class Game{

    constructor(){
        this.button = createButton('How to Play')
    }


    gameState(){
        var RefGameState = databse.ref('gameState');
        RefGameState.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player = new Player()
         var RefPlayerCount = await database.ref('playerCount')
         RefPlayerCount.on("value",()=>{
             PC = data.val()
             player.getPlayerCount()
         })   
         form = new Form()
         form.display()
        } 

        moana = createSprite(100,200)
        moana.addImage(moanaImg);
        minion = createSprite(120,200)
        minion.addImage(minionImg);
        elsa = createSprite(100,220)
        elsa.addImage(elsaImg);
        tom = createSprite(120,220)
        tom.addImage(tomImg);
        oggy = createSprite(200,220)
        oggy.addImage(oggyImg);
        jerry = createSprite(320,220)
        jerry.addImage(jerryImg);
        
    }

    play(){
        form.hide()

        Player.getPlayerInfo();

        if (allPlayers!==undefined){
            image(roomImg, 0, 0, displayWidth, displayHeight)
            
        var index = 0;

        var x;
        var y;

        for (var plr in allPlayers) {
            index+=1

            x = mouseX;
            y = mouseY;

            players[index-1].x = x
            players[index-1].y = y

            if (index===player.index){
                stroke(10);
                fill("green");
                ellipse(x,y,80,100);
                players[index-1].shapeColor = "green";
                camera.position.x = players[index-1].x;
                camera.position.y = players[index-1].y;
            
            }
        }
        


    }
    }
}