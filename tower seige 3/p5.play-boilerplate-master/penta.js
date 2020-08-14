class Pentagon {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.7,
          'density':1.7
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.width = 50;
      this.height =50;
     
     this.image=loadImage("pentagon.png");
          World.add(world, this.body);

    }
    display(){
      
     
      var pos =this.body.position;
      var angle = this.body.angle;
     // pos.x=mouseX;
      //pos.y=mouseY
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // ellipseMode(CENTER);
     // strokeWeight(3);
    // stroke('blue')
     //fill("red");
    image(this.image, 0,0, this.width, this.height);
      pop();
    }
  };
  