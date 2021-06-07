class SlingShot{
          constructor(body1,point2){
                    var options = {
                              length: 20 ,
                              stiffness:0.05 ,
                              bodyA: body1 ,
                              pointB: point2 ,

                    }
                    this.sling = Constraint.create(options) ;

                    World.add(world,this.sling);


          }

          fly(){
                //detach the bird
                //changing bodyA to null - empty/nothing
                 this.sling.bodyA = null ;
          }

          display(){
              if(this.sling.bodyA ){
                    strokeWeight(5);
                    line(this.sling.bodyA.position.x ,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
              }   
          }
}