class Chain {
    constructor(bodyA , pointB){
        var options = {
            stiffness : 0.005 ,
            bodyA : bodyA ,
            pointB : pointB
        }
        this.pointB = pointB ;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA != null){
            var pos1 = this.chain.bodyA.position ;
            var pos2 = this.pointB ;
            push();
            strokeWeight(3);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
            pop()
        }    
    }
    fly(){
        this.chain.bodyA = null ;
    }
    attach(bodyA){
        this.chain.bodyA = bodyA ;
    }
}