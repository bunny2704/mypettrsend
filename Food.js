class Food
{ constructor(){
  
       
  
  this.foodstock=0;
  this.lastfed;

  
  
  
   // this.body=Bodies.circle(x,y,radius);
   // this.radius=radius;
    
   //  World.add(world, this.body); 
    this.image=loadImage("Milk.png")
    
    }
    updatefoodstock(foodstock){
      this.foodstock=foodstock;
      }

      getfedtime(lastfed){
        this.lastfed=lastfed;
      }
      deductfood(){
        if(this.foodstock>0){
         this.foodstock=this.foodstock-1;
        }
       }
      getfoodstock(){
        return this.foodstock;
      }
  
    display(){
         var x =80;
         var y =100; 
  
  
     // push();

    imageMode(CENTER);
    image(this.image,720,220,70,70);
  
      if(this.foodstock!=0){
          for(var i=0;i<this.foodstock;i++){
              if(1%10==0){
                 x=80;
                y=y+50;
              }
              image(this.image,x,y,50,50);
              x=x+30;
          }
      }
  
 
 
  
  
    }
}