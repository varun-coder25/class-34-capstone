class Rope{
    constructor(bodyA, pointB){
     var options = {
         bodyA:bodyA,
         pointB : pointB,
         stiffness:1,
         length:100
     }
     this.pointB = pointB;
     this.Rope= Constraint.create(options);
     World.add(world,this.Rope);
    }
    attach(body){
        this.Rope.bodyA = body;
    }
    fly(){
        this.Rope.bodyA = null;
    }
    display(){
        if(this.Rope.bodyA){
var pointA =this.Rope.bodyA.position;
var pointB = this.pointB;
 
push();
stroke("blue");
strokeWeight(5);
line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
pop();
        
    }
}