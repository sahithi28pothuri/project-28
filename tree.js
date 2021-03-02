class Tree{
    constructor(x,y,width,height){
        
        this.tree = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage('images/tree.png');
        World.add(world,this.tree);

    }

    display(){

        imageMode(CENTER);
        image(this.image,this.tree.position.x,this.tree.position.y,350,400);

    }
}