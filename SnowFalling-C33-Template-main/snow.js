class Snow{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':1.0
        }
        
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
       this.vel=createVector();
       this.position=createVector(x,y);

      }
      display(){
        
        var pos=this.body.position
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
        
      }
      update(){
        this.position.add(this.vel);
      }
      render(){
        point(this.position.x,this.position.y);
      }
    }