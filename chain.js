class chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:constraintlog.body,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
         World.add(world,chain);
    }
    display(){
        var posA=this.chain.bodyA.position
        var posB=this.chain.bodyB.position

    strokeWeight(4);
    line(posA.x,posA.y,posB.x,posB.y);
    }
}