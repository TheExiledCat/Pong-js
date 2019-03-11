let keysDown={};
let score1=0;
let score2=0;
let isPaused =true;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let p1 = new Paddle(10,canvas.height/2-(28*6/2),10*4*0.8,28*6*0.8,true);
let p2 = new Paddle(canvas.width-10-(10*4),canvas.height/2-(28*6/2),10*4*0.8,28*6*0.8,false);
let ball =new Ball(canvas.width/2-10,canvas.height/2-10,20*0.8);

window.addEventListener("keydown",function(event){
        keysDown[event.keyCode] = true;
    })
    window.addEventListener("keyup",function(event){
        delete keysDown[event.keyCode];
    })
    
function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

    
    
    
  function checkPause(){
    ctx.font ="60px Arial";
    ctx.fillText(score1,canvas.width/4,100);
    ctx.fillText(score2,canvas.width/4*3,100);
       if(!isPaused){
           requestAnimationFrame(animate);
       }else{
           
           ctx.fillStyle="red";
           ctx.fillText("Paused",canvas.width/2-(60/2),canvas.height/2);
           ctx.fillText("Controls:",100,400);
           ctx.fillText("Player1: W and S",150,500);
           ctx.fillText("Player2: O and K",150,600);
           ctx.fillText("Escape to pause, Enter to play.",150,700);
       }
       
       requestAnimationFrame(checkPause);
      //movement
    for(let key in keysDown){
        let value = Number(key);
        
           if (value==83){
            p1.y+=p1.speed;
            }else if(value==87){
            p1.y-=p1.speed;
                } 
       
            if (value==75){
                p2.y+=p2.speed;
                }else if(value==79){
                p2.y-=p2.speed;
                    } 
                    if(value==27){
                isPaused=true;}
                if(value==13){
                    isPaused=false;
                }
                if(value==82){
                    score1=0;score2=0;
                    ball.x=ball.inix;
                    ball.y=ball.iniy;
                }
        }
     
  }
  function animate(){
    
    //draw background
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='black';
    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.closePath();
    ctx.fill();
    //check controls
    
   
    
    
    
    
    //run draw functions 
    p1.draw();
    p2.draw();
    ball.draw();
    //animate at steady rate
    
        

   
    
    
     
     
}

checkPause();