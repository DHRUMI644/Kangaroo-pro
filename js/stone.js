class Stone {
    constructor(x,y, radius){
var stone_options={
    friction:1,
    isStatic: false,
    restitution:0,
    density:1.2
}
this.x=x
this.y=y

this.image = loadImage("images/stone.png");
this.radius = radius;
this.body = Bodies.circle(this.x,this.y,this.radius/2, stone_options);
World.add(world, this.body);
    }
    fly(){
        this.body= null
    }
    display(){
        var position = this.body.position;
        push()
        translate(position.x, position.y)
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0,0, this.radius*2, this.radius*2);
        pop()    }
}