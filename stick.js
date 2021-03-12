class stick{
    constructor(x,y,width,height)
    {
        var options={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        var stickPos = this.body.position;
        push();
        rectMode(CENTER);
        fill("grey");
        rect(stickPos.x, stickPos.y, this.width, this.height);
        pop();
    }
}