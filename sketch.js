function setup() {
  createCanvas(400, 400);
  console.log("Totoro");
  console.log("Totoro is a forest creature from the movie My Neighbor Totoro. In one part of the movie, totoro is getting rained on so the main character gives totoro a umbrella.");

}
//body
 var xlocation = 355;
 var ylocation = 13; 
 var xbody = 355;
 var ybody = 18;

//ears
var xLeftEar = 348
var yLeftEar = 0
var xRightEar = 362
var yRightEar = 0

//eyes
var xLeftEye = 348
var yLeftEye = 3
var xLeftPupil =348
var yLeftPupil =3
var xRightEye = 362
var yRightEye = 3
var xRightPupil = 362
var yRightPupil = 3


function draw() {
  background("#AEDCF3");
  
  //body
    fill(163, 165, 171);
  stroke(163, 165, 171);
  ellipse(200,300,150,200);
    fill(247, 244, 200);
  stroke(247, 244, 200);
  ellipse(200,320,125,140)
  
    //triangles
      strokeWeight(1)
  fill(163, 165, 171)
  stroke(163, 165, 171)
  triangle(150,300,160,290,170,300)
  triangle(180,300,190,290,200,300)
  triangle(210,300,220,290,230,300)
  triangle(235,300,245,290,255,300)
  
  triangle(160,280,170,270,180,280)
  triangle(190,280,200,270,210,280)
  triangle(220,280,230,270,240,280)
  

//face
  //nose
   strokeWeight(1)
  fill(73, 35, 35)
  stroke(73, 35, 35)
  ellipse(200,235,20,5)
  //eyes
  fill(236, 245, 255 )
  stroke(95, 96, 99)
  ellipse(165,230,15,15)
  fill(73, 35, 35)
  ellipse(165,230,5,5)
   fill(236, 245, 255 )
  ellipse(235,230,15,15)
  fill(73, 35, 35)
  ellipse(235,230,5,5)
  //ears 
  fill(163, 165, 171)
  stroke(163, 165, 171)
  ellipse(165,185,25,45)
  triangle(170,195,160,215,180,215)
  ellipse(233,185,25,45)
  triangle(233,195,220,215,240,215)
  //whiskers
    strokeWeight(1)
  stroke(color("black"))
  line(150,240,130,230)
  line(154,245,133,240)
  line(154,248,128,250)
    line(250,240,280,230)
    line(250,250,275,255)
    line(250,245,270,243)

    //umbrella
  strokeWeight(5)
  stroke(115, 87, 65 )
  line(265,300,265,140)
  
  stroke(46, 54, 108)
  fill(60, 66, 108 )
arc(263,145,163,75,PI,0)
  
    stroke(54, 71, 97)
  fill("#AEDCF3")
curve(130,180,180,145,210,148,220,200)
curve(180,210,210,150,270,145,300,230)
curve(248,205,265,145,320,147,350,233)
curve(290,180,320,145,343,148,355,200)
  
  fill(89, 76, 54 )
  stroke(89, 76, 54 )
  triangle(263,102,258,105,268,105)

  //left arm (my perspective)
  fill(163, 165, 171)
  stroke(163, 165, 171)
  ellipse(133,300,33,75)
  ellipse(140,265,22,22)
  //right arm (my perspective)
 ellipse(275,280,50,30)

  //mini totoro body
    fill(247, 247, 235)
  stroke(247, 247, 235 )
  ellipse(xlocation,ylocation, 30,35)
  xlocation = xlocation - 1;
  ylocation = ylocation + 1;
  if( xlocation < 200) {
    (ylocation = 180) 
    
     if( xlocation = 200) { (ylocation = 180 )}
    
  }
  ellipse(xbody,ybody,31,28)
  xbody = xbody - 1;
  ybody = ybody + 1;
  if( xbody < 199.5) {
    (ybody = 183)
    
    if(xbody = 199.8) { (ybody = 183)}
  }

//mini totoro left ear
    ellipse(xLeftEar,yLeftEar, 10,20)
  xLeftEar = xLeftEar - 1;
  yLeftEar = yLeftEar + 1;
  if(xLeftEar < 193 ) {
    (yLeftEar = 168)
    
    if(xLeftEar = 193) { (yLeftEar = 168)}
  }
//mini totoro right ear
    ellipse(xRightEar,yRightEar, 10,20)
  xRightEar = xRightEar - 1;
  yRightEar = yRightEar + 1;
  if(xRightEar < 208 ) {
    (yRightEar = 168)
    
    if(xRightEar = 208) { (yRightEar = 168)}
  }
//mini totoro left eye
  fill("white")
  stroke(91, 91, 91 )
  strokeWeight(1)
    ellipse(xLeftEye,yLeftEye,8.5,8.5)
  xLeftEye = xLeftEye - 1;
  yLeftEye = yLeftEye + 1;
  if(xLeftEye < 193) {
    (yLeftEye = 170)
    
    if(xLeftEye = 193) {(yLeftEye = 170)}
  }

  //mini totoro left pupil
  fill("black")
  stroke("black")
  ellipse(xLeftPupil,yLeftPupil, 3,3)
  xLeftPupil = xLeftPupil - 1;
  yLeftPupil = yLeftPupil + 1;
  if(xLeftPupil < 193) {
    (yLeftPupil = 170)
    
    if(xLeftPupil = 193) {(yLeftPupil = 170)}
  }
  //mini totoro right eye
    fill("white")
  stroke(91, 91, 91 )
    ellipse(xRightEye,yRightEye,8.5,8.5)
  xRightEye = xRightEye - 1;
  yRightEye = yRightEye + 1;
  if(xRightEye < 207) {
    (yRightEye = 170)
    
    if(xRightEye = 207) {(yRightEye = 170)}
  }
    //mini totoro right pupil
    fill("black")
  stroke("black")
  ellipse(xRightPupil,yRightPupil, 3,3)
  xRightPupil = xRightPupil - 1;
  yRightPupil = yRightPupil + 1;
  if(xRightPupil < 207) {
    (yRightPupil = 170)
    
    if(xRightPupil = 207) {(yRightPupil = 170)}
  }


//grass
  fill(157, 205, 119 )
   stroke(157, 205, 119 )
  ellipse(100,400,200,75)
  ellipse(200,400,200,75)
  ellipse(350,400,200,75)
  ellipse(0,400,100,75)
  
  
    

}