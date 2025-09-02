

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0) 
 
//  O = map(other,0,100,0,50);
//  B = map(bass,0,100,0,100);
//  D = map(drum,0,100,0,100);
//  V = map(vocal,0,100,0,100);
// strokeWeight()
// fill(200,0,0)
// for(let i = 0; i < V ; i=i+5){
//   fill(255, 64, 0)//orange vocal
//   ellipse(100,0+(10*i),V);
// }
// for(let i = 0; i < D ; i=i+5 ){
// fill(7, 19, 245)//blue
//   ellipse(200,0+(10*i),D);
// }
// for(let i = 0; i < B ; i=i+5 ){
// fill(0,255,0)//white
//   ellipse(300,0+(10*i),B);
// } 
// for(let i = 0; i < O ; i=i+5 ){
// fill(203, 82, 247)//violet
//   ellipse(400,0+(10*i),O);
// } 
// ellipse(540,960,blob)
// blob = map(drum,10,0,100,0)
let Top = 50 
let BTop = 550
let lenght = 400
let Ybottem = Top + lenght
let BlueBottem = BTop + lenght
D = map(drum,0,100,0,750)
O = map(other,0,100,0,750)
for(let i=0; i < D ; i=i+10){ //Bottem right blue drum
 let x = -i+990
 stroke(0, 0, 255);
 strokeWeight(5)
 line(x,BTop,x,BlueBottem)
}
for(let i=0; i < D ; i=i+10){ //Yellow top left drum
  let Yellow = i+10
stroke(255, 200, 0);
line(Yellow,Top,Yellow,Ybottem)
}
for(let i=0; i < O ; i=i+10){ //Red top left other
  let Red = i+10
stroke(255, 0, 0);
line(550,Red,950,Red)}

for(let i=0; i < O ; i=i+10){ //Red bottem right other
  let Red = -i+990
stroke(255, 0, 0);
line(50,Red,450,Red)}

}