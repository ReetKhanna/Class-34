class Rope  {
    constructor(bodyA,pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.2,
           lenght:250
      }
      this.pointB=pointB;
      this.rope=Constraint.create(options)
      World.add(world, this.rope);
    }
    display(){
      var pointA =this.rope.bodyA.position;
      var pointB=this.pointB;
      push()
      fill("purple");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
    }
  }
  