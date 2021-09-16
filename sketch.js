const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  function showArrows(index, arrows) {
    arrow.display()
  }
    
  //if Space (32) key is pressed call shoot function of playerArrow
    //Call shoot() function and pass angle of playerArcher
    function keyPressed() {

      if(keyCode === 32){
      
         var posX = playerArcher.body.position.x;
         var posY = playerArcher.body.position.y;
         var anglr = playerArcher.body.angle+PI/2;
         var arrow = new PlayerArrow(posX, posY, 100,10);
    
         Matter.body.setAngle(arrow.body, angle);
         arrow = new PlayerArrow (player.x,player,y );
         playerArrows.push(arrow);
      }
    }
    
    function keyReleased () {

      if(keyCode === 32){
        
        
         playerArrows.shoot(arrow)
      }
    
}

}
  
