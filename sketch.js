var dog,sadDog,happyDog,foods;
var cog,foodstock,lastfed,feed,addfood,database,fedTime,foodobj;


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(happyDog);
  dog.scale=0.15;

  foodobj=new Food ();

  foodstock=database.ref('Food');
  foodstock.on("value",readstock);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feeddog);

  addfood=createButton("Add Food");
  addfood.position(800,95);
  addfood.mousePressed(addfood);

}

function draw() {
  background(46,139,87);
  foodobj.display();
  drawSprites();
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastfed=data.val();
});





  fill(255,255,255);
  textSize(25);
  if(lastfed>=12){
    text("Last Feed : "+ lastfed % 12 + " PM", 350,30);
   }
   else if(lastfed==0){
     text("Last Feed : 12 AM",350,30);
   }
   else{
     text("Last Feed : "+ lastfed + " AM", 350,30);
   }
 
  drawSprites();
}
function readstock(data){
  foods=data.val();
  foodobj.updatefoodstock(foods);
}
function feeddog(){
  dog.addImage(happyDog);
  
  if(foodobj.getfoodstock()<= 0){
    foodobj.updatefoodstock(foodobj.getfoodstock()*0);
  }else{
    foodobj.updatefoodstock(foodobj.getfoodstock()-1);
  }
  
  database.ref('/').update({
    Food:foodobj.getfoodstock(),
    feedtime:hour()
  })
}
function addfood(){
  foods++;
  database.ref('/').update({
    Food:foods
  })
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
