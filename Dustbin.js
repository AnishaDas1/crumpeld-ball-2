class Dustbin{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinHeight=200;  
        this.wallThickness=20;
        this.image=loadImage("dustbingreen.png");
        this.angle=0;
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallThickness,{isStatic:true});

    World.add(world,this.bottomBody)
    
   
    }
    display()
    {
        var posBottom=this.bottomBody.position;
    
       // var posLeft=this.leftWallBody.position;
       // var posRight=this.rightWallBody.position;
       

push()
translate(posBottom.x,posBottom.y);
imageMode(CENTER)
fill("white");
image(this.image,0,0,this.dustbinwidth,this.dustbinHeight);
pop()



    }
}