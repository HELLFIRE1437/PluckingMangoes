class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic : false ,
            restitution : 0 , 
            friction : 1 , 
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius ;
        this.image = loadImage("images/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle ;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        /*imageMode(CENTER);
        image(this.image,0,0,85,80);*/
        fill(50);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop(); 
    }
}