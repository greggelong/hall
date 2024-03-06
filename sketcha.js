let stop;
let sbtm;
let sp;
let lns =60;
let h;
let doors =[]
let lasttouch = 0;
let rock= false

function preload(){
    doors[0] = loadImage("d1.jpg")
    doors[1] = loadImage("d2.jpg")
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  //fullScreen();
  background(0);
  stroke(0,255,0);
  sp= width/lns;
  
  sbtm = 5;
  h=0;
  frameRate(3)
  //doors[0].filter(POSTERIZE, 3);
 // doors[1].filter(POSTERIZE, 3);
  doors[0].filter(BLUR, 3);
  doors[1].filter(BLUR, 3);
  imageMode(CENTER)
  
}

function draw(){
  
  background(255);
  translate(width/2,height/2)
  
   
  tint(255, 190); // Display at half opacity
  //tint(190,(10*frameCount)%255,(255-frameCount*10)%255, 190);
  image(doors[frameCount%2],0,0,width,height)
  //image(doors[(frameCount+1)%2],0,100,width*0.8,height*0.8)
  //image(doors[(frameCount)%2],0,0,width*0.6,height*0.6)
  image(doors[(frameCount+1)%2],0,0,width/2,height/2)
  //tint(255, 100); // Display at half opacity
 image(doors[(frameCount)%2],0,0,width/4,height/4)
  image(doors[(frameCount+1)%2],0,0,width/8,height/8)
  image(doors[(frameCount)%2],0,0,width/16,height/16)
  //noLoop()
}


function touchStarted() {
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
    /// toggle mix
    if (!rock) {
      rock = true;
      //doors[0].filter(POSTERIZE, 3);
      //doors[1].filter(POSTERIZE, 3);
      //doors[0].filter(BLUR, 3);
      //doors[1].filter(BLUR, 3);
    } else {
      rock = false;
      //doors[0].filter(BLUR, 0);
      //doors[1].filter(BLUR, 0);
    }
  }

  lasttouch = currenttime;
}

function mouseClicked() {
  touchStarted();
}