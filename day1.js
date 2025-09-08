

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0) 
 
let Top = 50 
let BTop = 550
let lenght = 400
let Ybottem = Top + lenght
let BlueBottem = BTop + lenght
D = map(drum,0,100,0,750)
O = map(other,0,100,0,750)
cycle = map(vocal,0,100,0,250)

for(let i=0; i < O ; i=i+40){ //white bottem right cycle
  let White = i+10
stroke(255);
ellipse(250,1000,White)
}
if(bass > 60){
  background(255) //white black change
}


for(let i=0; i < O ; i=i+40){ //black top left cycle
  let Black = i+10
stroke(0);
ellipse(750,0,Black)
}


noStroke()
fill(0,0,205)
if (vocal>50){
  rect(150, -550, 200, cycle*5); //blue box
}
fill(205,150,0)
if (vocal>50){
  rect(650, 1550, 200, -cycle*5); //yellow box
}

noFill()


for(let i=0; i < D ; i=i+15){ //Bottem right blue drum
 let x = -i+990
 stroke(0, 0, 255);
 strokeWeight(3)
 line(x,BTop,x,BlueBottem)
}

  stroke(0,0,100)
   strokeWeight(40)
  ellipse(0,750,cycle*2) // blue cycle
   

   for(let i=0; i < D ; i=i+15){ //Yellow top left drum
  let Yellow = i+10
stroke(255, 200, 0);
strokeWeight(3)
line(Yellow,Top,Yellow,Ybottem)
}
 stroke(150,100,0)
 strokeWeight(40)
ellipse(1000,250,cycle*2) // yellow cycle
 strokeWeight(5)

}