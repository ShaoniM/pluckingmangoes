class mango{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("mango.png");
    }
    display(){
      var mangoPos=this.body.position;	
      push();
      translate(mangoPos.x, mangoPos.y);
      rectMode(CENTER);
      imageMode(CENTER);

      image(this.image,0,0,this.width,this.height);
      pop();
    }
}