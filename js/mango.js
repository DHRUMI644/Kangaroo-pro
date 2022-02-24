class Mango {
	constructor(x,y,radius){
	var mango_options ={
		friction: 1,
		isStatic:true,
		restitution:0
	}
	this.image = loadImage("images/mango.png");
	this.x=x
	this.y=y
	this.radius = radius;
	this.body = Bodies.circle(this.x,this.y,this.radius, mango_options);
	World.add(world, this.body);
	}
	display(){
		var position = this.body.position;
		push()
        translate(position.x, position.y)
		rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.image, 0,0, this.radius*2, this.radius*2);
        pop()    }
}
	
	
	