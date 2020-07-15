const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var option= {
    restitution:1
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball= Bodies.circle (200,100,10,option)
    ball2= Bodies.circle (100,100,10,option)
    World.add(world,ball)
    console.log(ball);
    World.add(world,ball2)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   ellipse(ball.position.x,ball.position.y,10,10)
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball2.position.x,ball2.position.y,10,10)
}