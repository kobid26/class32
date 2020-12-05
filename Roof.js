class roof
{
    constructor(x,y,width,height)
    {

        var options=
        {
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.groundObject=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.groundObject);
        
    }

    display()
    {
        rectMode(CENTER);
        fill("red");
        stroke(0);

        rect(this.groundObject.position.x,this.groundObject.position.y,this.width,this.height);
    }
  }