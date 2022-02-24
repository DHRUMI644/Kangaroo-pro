class Ground {
    constructor(x,y,width, height){
        var ground_options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height, ground_options);
        this.x=x
	     this.y=y
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        var position = this.body.position;
        push()
        translate(position.x, position.y)
        fill(128,128,128)
        rectMode(CENTER);
        rect( 0,0, this.width, this.height);
        pop()    }
}