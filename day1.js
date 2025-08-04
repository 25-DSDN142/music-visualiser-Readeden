let red = 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(200) 
 
  red = map(other,0,100,0,500)

  fill(200,0,0)
  ellipse(200,300,red)


}