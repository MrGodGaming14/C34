class Ball{
    constructor(x,y, width, height){
       var options={
            isStatic: false,
            density: 1,
            frictionAir: 0.005
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)

        this.width = width;
        this.height = height;
    }

    display(){
        push()
       // console.log(this.body.position.x);
        //console.log(this.body.position.y);
        ellipseMode(RADIUS);
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}