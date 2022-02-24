class Launcher {
    constructor(bodyA, pointB){
        var launcher_options ={
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
        this.bodyA=bodyA;
        this.launcher = Constraint.create(launcher_options);
        World.add(world, this.launcher);
        this.pointB = pointB;
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
