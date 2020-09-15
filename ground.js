class Ground{

    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
        World.add(world, this.body);

        this.height = h;
        this.width = w;
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
}