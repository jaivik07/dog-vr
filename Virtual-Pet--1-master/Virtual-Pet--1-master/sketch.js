var dogs, happyDog, database, foodS, foodStock


function preload()
{
dog =loadImage("images/doglmg.png")
dogHappy =loadImage("images/doglmg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dogs.addImage(dog)
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() { 
  background(46, 139, 87) 
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS)
  dogs.addImage(dogHappy)
}
  drawSprites();
  
  
}


function readStock(data){
foods = data.val()
}

function writeStock(x){
  if(x<0){
    x=0;
  }else{
    x=x-1;
  }
 database.ref("/").update({
  Food:x
 })
}
