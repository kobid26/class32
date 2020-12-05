

class Rope{
    constructor(body1, body2, xOffset, yOffset) {
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.xOffset, y: this.yOffset},
        }
       // this.body2 = body2;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(2);

        var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.xOffset
		var Anchor2Y=pointB.y+this.yOffset

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}