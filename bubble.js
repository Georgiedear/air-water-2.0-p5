class Bubble {

    constructor (x, y) {
    this.x = int(x);
    this.y = int(y);
    this.r;
    this.g = 0;
    this.speedX = random(-0.4, 0.4); 
    this.speedY = random(-0.4, 0.4);
    this.c =  color(random(255), random(255), random(255));
    this.releasedTime = -1;  
    this.isDead = false;
    this.lifeTime = 5000;
    }


   

     grow(windSpeed) {
        g += windSpeed*2;
      }
  
     draw() {   
      push();
      noStroke();
      imageMode(CENTER);
      tint(255, 210);
      image(bubbleImg, x, y, g, g);
      pop();
    }
  
     release() {
      releasedTime = millis();
    }
  
     dead() {
      isDead = true;
    }
  
     update() {
      move();
  
       isReleased = releasedTime != -1;
      if (isReleased && !isDead) {
         timeSinceRelease = millis() - releasedTime;
        if (timeSinceRelease > lifeTime) {
          dead();
        }
      }
    }
  
     move() {
      x = x+speedX;
      y = y+speedY;
    }
}