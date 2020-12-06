class Block1 {
    constructor(x, y, width, height) {
        var option = {
        isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
    
        rectMode(CENTER)
        fill("#3FE0D0")
        stroke("black")
        strokeWeight(2.5)
        rect(pos.x,pos.y, this.width, this.height)                           
    }
}