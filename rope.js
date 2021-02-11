class Rope{
    constructor(body, point){
    var options={
        bodyA: body,
        pointB: point,
        stiffness: 1,
        length: 450
    }
    this.pointB = point

    this.body = Matter.Constraint.create(options)
    World.add(world, this.body);

    

    }

    display(){
        if(this.body.bodyA){
        var pointA = this.body.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
}