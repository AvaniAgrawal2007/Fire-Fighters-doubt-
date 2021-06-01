class Playerclass{
    
    constructor(){
        this.index= null;
        this.name = null;
        this.score = null;
        
    }

    getPlayerCount() {
        var ref = database.ref('playerCount')
        ref.on("value",(data)=>{
            PC=data.val();
        })
    }

    updatePlayerCount(count) {
        database.ref('playerCount').update({
            'playerCount':count
        })
    }
    // title = createElement("h2")

    static getPlayerInfo(){
        var refPlayerInfo = database.ref('players');
        refPlayerInfo.on("value",(data)=>{
            allPLayers = data.val();
        })
    }
}
