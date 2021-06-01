class Form {

    constructor() {
        this.button = createButton('Start')
        this.input = createInput('Your Name')
        this.greeting = createElement('h2')
        this.gameName = createElement('h1')
        this.buttonPlay = createButton('Play')
        this.buttonHTP = createButton('How to Play')
        this.buttonStory = createButton('Story')
        this.StoryHeading = createElement('h1')
        this.Storyline1 = createElement('h1')
        this.Storyline2 = createElement('h1')
        this.Storyline3 = createElement('h1')
        this.Storyline4 = createElement('h1')
        this.Storyline5 = createElement('h1')
        this.Storyline6 = createElement('h1')
        this.storyBackbutton = createButton('Previous page')
        this.HTPscreen2 = createButton('Next')
        this.HTPscreen3 = createButton('Next')
        this.HTPscreen4 = createButton('Next')
        this.HTPscreen5 = createButton('Next')
        this.HTPBackbutton = createButton('Homepage')
        this.HTPline1 = createElement('h1')
        this.HTPline2 = createElement('h1')
        this.HTPline3 = createElement('h1')
        this.HTPline4 = createElement('h1')
        this.HTPline5 = createElement('h1')
        this.HTPline6 = createElement('h1')
        this.HTPline7 = createElement('h1')
        this.HTPline8 = createElement('h1')
        this.HTPline9 = createElement('h1')
        this.HTPline10 = createElement('h1')
        this.HTPline11 = createElement('h1')
        this.HTPline12 = createElement('h1')
        this.HTPline13 = createElement('h1')
        this.HTPline14 = createElement('h1')
        this.HTPline15 = createElement('h1')
        this.HTPline16 = createElement('h1')
        this.HTPline17 = createElement('h1')
        this.HTPline18 = createElement('h1')
        this.HTPline19 = createElement('h1')
        this.HTPline20 = createElement('h1')
        this.HTPline21 = createElement('h1')
        this.HTPline22 = createElement('h1')
        this.HTPline23 = createElement('h1')
        this.HTPline24 = createElement('h1')
        this.HTPline25 = createElement('h1')
        this.HTPline26 = createElement('h1')
    }


    display() {

        background(formBg)

        this.button.position(displayWidth/2+60, displayHeight/2+50)
        this.input.position(displayWidth/2-50, displayHeight/2)

        textSize(50)
        stroke("White")
        strokeWeight(8)
        textFont("ALGERIAN")
       // text("Fire - Fighters", displayWidth/4, displayHeight/3)

       this.gameName.html("Fire - Fighters")
       this.gameName.position(displayWidth/4, displayHeight/4)

        this.button.mousePressed(()=> {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            this.greeting.html("Welcome "+player.name+"!")
            this.greeting.position(displayWidth/4+20,displayHeight/3+10)
            this.buttonPlay.position(displayWidth/2+20, displayHeight/4+300)
            this.buttonStory.position(displayWidth/2+20, displayHeight/3+290)
            this.buttonHTP.position(displayWidth/2+20, displayHeight/2+200)
            //background(gameImage)
        })

        this.buttonStory.mousePressed(()=>{
            this.buttonPlay.hide()
            this.buttonStory.hide()
            this.buttonHTP.hide()
            this.greeting.hide()
            this.gameName.hide()

            this.StoryHeading.html("THIS IS HOW THE BATTLE STARTS:")
            this.Storyline1.html('"  Long ago on the planet of IRIS, there lived two tribes in harmony. The Fire tribe decided one ')
            this.Storyline2.html(" day to take over the world with the pollution of firecrackers. But the Nature tribe fought against ")
            this.Storyline3.html(" their actions and a great battle ensued. This is how the Fire tribe came to be called the Evil Fi-crackners ")
            this.Storyline4.html("  and the Nature tribe became the Protecting Environmentalists. They are still fighting to this day, ")
            this.Storyline5.html('  but the modern warriors have chosen games to reach a result instead of traditional combat. "')
            this.Storyline6.html(' Will you be the villainous Fi-crackners or the heroic Environmentalists?')
            this.StoryHeading.position(displayWidth/3,displayHeight/8)
            this.Storyline1.position(displayWidth/30, displayHeight/5+50)
            this.Storyline2.position(displayWidth/30, displayHeight/5+150)
            this.Storyline3.position(displayWidth/30, displayHeight/5+250)
            this.Storyline4.position(displayWidth/30, displayHeight/5+350)
            this.Storyline5.position(displayWidth/30, displayHeight/5+450)
            this.Storyline6.position(displayWidth/8, displayHeight/5+550)
            this.storyBackbutton.position(displayWidth/12, displayHeight/12)

            this.StoryHeading.show()
            this.Storyline1.show()
            this.Storyline2.show()
            this.Storyline3.show()
            this.Storyline4.show()
            this.Storyline5.show()
            this.Storyline6.show()
            this.storyBackbutton.show()

        })

        this.storyBackbutton.mousePressed(()=>{
            this.Storyline1.hide()
            this.Storyline2.hide()
            this.Storyline3.hide()
            this.Storyline4.hide()
            this.Storyline5.hide()
            this.Storyline6.hide()
            this.StoryHeading.hide()
            this.storyBackbutton.hide()

            this.buttonPlay.show()
            this.buttonStory.show()
            this.buttonHTP.show()
            this.greeting.show()
            this.gameName.show()
            
        })
        
        this.buttonHTP.mousePressed(()=>{
        
            this.buttonPlay.hide()
            this.buttonStory.hide()
            this.buttonHTP.hide()
            this.greeting.hide()
            this.gameName.hide()

            this.HTPline1.html('The game consists of 6 different well known animated characters that are: ')
            this.HTPline2.html(" Oggy, Elsa, Moana, Tom, Jerry and Minion.")
            this.HTPline3.html("All the players are divided into 2 teams - Ficrackners and Environmentalists.")
            this.HTPline4.html("-Ficrackners : people who want to burn fire crackers.")
            this.HTPline5.html("-Environmentalists : people who want to save the environment by stop burning fire crackers.")
            
            this.HTPline1.position(displayWidth/30,displayHeight/4)
            this.HTPline2.position(displayWidth/30,displayHeight/4+90)
            this.HTPline3.position(displayWidth/30,displayHeight/4+200)
            this.HTPline4.position(displayWidth/10,displayHeight/4+300)
            this.HTPline5.position(displayWidth/10,displayHeight/4+400)

            this.HTPscreen2.position(displayWidth-200,displayHeight-100)
        })

        this.HTPscreen2.mousePressed(()=>{
            this.HTPline1.hide()
            this.HTPline2.hide()
            this.HTPline3.hide()
            this.HTPline4.hide()
            this.HTPline5.hide()
            this.HTPscreen2.hide()

            this.HTPscreen3.position(displayWidth-200,displayHeight-100)

            this.HTPline6.html('There will be 3 short games and the team which wins atleast 2 games, ')
            this.HTPline7.html(" wins the whole game.	All the games will be 1 vs 1 and only one ")
            this.HTPline8.html("game can be played by one person in each team (in one battle).")

            this.HTPline6.position(displayWidth/6,displayHeight/2-50)
            this.HTPline7.position(displayWidth/5,displayHeight/2+50)
            this.HTPline8.position(displayWidth/5,displayHeight/2+150)
        })

        this.HTPscreen3.mousePressed(()=>{
            this.HTPline6.hide()
            this.HTPline7.hide()
            this.HTPline8.hide()
            this.HTPscreen3.hide()

            this.HTPscreen4.position(displayWidth-200,displayHeight-100)

            this.HTPline9.html('You will be assigned the characters after clicking on play. You can  ')
            this.HTPline10.html(" move your character either by your mouse or by the arrow keys. Click ")
            this.HTPline11.html(" on the button of your game to play it. Also, upon completing your ")
            this.HTPline12.html(" game you can hover over to see the CCTV recordings of some random ")
            this.HTPline13.html("games by clicking on the respective button on the other side of the room.")
            
            this.HTPline9.position(displayWidth/6+20,displayHeight/4+30)
            this.HTPline10.position(displayWidth/6,displayHeight/4+130)
            this.HTPline11.position(displayWidth/6+25,displayHeight/4+230)
            this.HTPline12.position(displayWidth/6+5,displayHeight/4+330)
            this.HTPline13.position(displayWidth/6+2,displayHeight/4+430)
        })

        this.HTPscreen4.mousePressed(()=>{
            this.HTPline9.hide()
            this.HTPline10.hide()
            this.HTPline11.hide()
            this.HTPline12.hide()
            this.HTPline13.hide()
            this.HTPscreen4.hide()

            this.HTPscreen5.position(displayWidth-200,displayHeight-100)

            this.HTPline14.html('The 3 mini games will be Car racing, Plinko and Balloon Bursters:')
            this.HTPline15.html("Car racing - In this game, you just need to move your car (one with the red ")
            this.HTPline16.html("dot under it), till the end, saving it from obstacles. The one who reaches")
            this.HTPline17.html("first without touching any obstacles wins. Use arrow keys to move your car.")
            this.HTPline18.html("Plinko - As the world renowned plinko is played, this is a virtual version of the")
            this.HTPline19.html('game. All you have to do is click at a random position where you think you can')
            this.HTPline20.html("score the most points by dropping the yumm choco chip cookie in your luck!")
            this.HTPline21.html("Balloon Bursters - Burst all the balloons before your opponent catches them. ")
            this.HTPline22.html("But be careful not to touch any BOMBS with your arrow. Use the space button to")
            this.HTPline23.html("release an arrow and use your mouse / arrow keys to take the bow up or down.")
            
            this.HTPline14.position(displayWidth/5,displayHeight/35)
            this.HTPline15.position(displayWidth/15,displayHeight/30+90)
            this.HTPline16.position(displayWidth/10,displayHeight/30+160)
            this.HTPline17.position(displayWidth/10,displayHeight/30+240)
            this.HTPline18.position(displayWidth/15,displayHeight/30+330)
            this.HTPline19.position(displayWidth/10,displayHeight/30+400)
            this.HTPline20.position(displayWidth/10,displayHeight/30+480)
            this.HTPline21.position(displayWidth/15,displayHeight/30+570)
            this.HTPline22.position(displayWidth/10,displayHeight/30+640)
            this.HTPline23.position(displayWidth/10,displayHeight/30+720)
            
        })

        this.HTPscreen5.mousePressed(()=>{
            this.HTPline14.hide()
            this.HTPline15.hide()
            this.HTPline16.hide()
            this.HTPline17.hide()
            this.HTPline18.hide()
            this.HTPline19.hide()
            this.HTPline20.hide()
            this.HTPline21.hide()
            this.HTPline22.hide()
            this.HTPline23.hide()
            this.HTPscreen5.hide()

            this.HTPBackbutton.position(displayWidth-200,displayHeight-100)

            this.HTPline24.html('This is the end of instructions.')
            this.HTPline25.html("Now proceed to play and have fun with your friends/ family! ")
            
            this.HTPline24.position(displayWidth/5,displayHeight/5+10)
            this.HTPline25.position(displayWidth/8,displayHeight/3-10)
        })

        this.HTPBackbutton.mousePressed(()=>{
            this.HTPline24.hide()
            this.HTPline25.hide()
            this.HTPBackbutton.hide()
            this.buttonPlay.show()
            this.buttonStory.show()
            this.buttonHTP.show()
            this.greeting.show()
            this.gameName.show()

        })
    
        this.buttonPlay.mousePressed(()=>{
            this.buttonPlay.hide()
            this.buttonStory.hide()
            this.buttonHTP.hide()
            this.greeting.hide()
            this.gameName.hide()

            PC=PC+1
            player.index = PC
            player.updatePlayerCount()
            player.updateCount(PC)

        })
    
    }

}
