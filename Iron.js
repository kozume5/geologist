class Iron {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 3.0,
        'restitution':30.0
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 120;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
        var ironpos=this.body.position;		
        push()
        translate(ironpos.x, ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("blue");
    

        pop()
    }
  };
  