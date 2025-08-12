

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0) 
 
 O= map(other,0,100,0,100);
 B= map(bass,0,100,0,100);
 W= map(drum,0,100,0,100);
 V= map(vocal,0,100,0,100);
strokeWeight()
fill(200,0,0)

for(let i = 0; i <5; i=i+1){
  fill(255, 64, 0)//orange
  ellipse(100,300+(100*i),O);
  fill(7, 19, 245)//blue
  ellipse(200,300+(100*i),B);
  fill(0,255,0)//white
  ellipse(300,300+(100*i),W);
  fill(203, 82, 247)//violet
  ellipse(400,300+(100*i),V);

}

}