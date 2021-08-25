class Slingshot{
    constructor(bodyA,bodyB)
    {
       var option={bodyA:bodyA,bodyB:bodyB,length:10,stiffness:0.04}
       this.sling=Matter.Constraint.create(option)
       
    }

    display()
    {
       strokeWeight(6)
      stroke(0)
       var body1=this.sling.bodyA.position
       var body2=this.sling.bodyB.position
       line(body1.x,body1.y,body2.x,body2.y)
       noStroke()

    }







}
