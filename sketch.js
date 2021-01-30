const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(820,320,70,70);
    box2 = new Box(900,320,70,70);
    
    box3 = new Box(820,390,70,70);
    box4 = new Box(900,390,70,70);
    box6 = new Box(900,390,70,70);
    box7 = new Box(820,460,70,70);
    box8 = new Box(900,460,70,70);
    box9 = new Box(820,530,70,70);
    box10 = new Box(900,530,70,70);

    

    box5 = new Box(820,390,70,70);
    
  
    bird = new Bird(100,100);
    rope1 = new Rope(bird.body,{x:400,y:50})

}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
    box6.display();
    box7.display();
    box5.display();
    box8.display();
    box9.display();
    box10.display();
    bird.display();
    rope1.display();
}




function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope1.fly();
}