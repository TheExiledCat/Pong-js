class Ball{
    constructor(x,y,r){
        this.inix =x;
        this.iniy=y;
        this.x=x;
        this.y=y;
        this.r=r;
        this.xVel =Math.floor((Math.random()*5)+7)*0.8;
        console.log(this.xVel);
        this.yVel =Math.floor((Math.random()*5)+7)*0.8;
        

        
       
        this.xDir =1;
        this.yDir =1;
    }
    reset(){
        this.xVel =Math.floor((Math.random()*5)+7)*0.8;
           this.x=this.inix;
        this.y=this.iniy; 
        
        
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle='white';
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.closePath();
        ctx.fill()
        this.x+=this.xVel*this.xDir;
        this.y+=this.yVel*this.yDir;

        //check walls
        if(this.y<=this.r || this.y>= canvas.height-this.r){
            this.yDir*=-1;
        }
        if(this.x<=p1.x+p1.w/2||this.x>=p2.x+p2.w/2){
            this.reset();
            
            if(this.xDir>0){
                score1++;
                if(score1>score2){
                    this.xDir= -1;
                    this.yDir*=-1;
                }else if(score2>score1){
                    this.xDir=1;
                    this.yDir*=-1;
                }
            }else if(this.xDir<0){
                score2++;
                if(score1>score2){
                    this.xDir= -1;
                    this.yDir*=-1;
                }else if(score2>score1){
                    this.xDir=1;
                    this.yDir*=-1;
                }
            }
        }
        //check paddles
        if(this.x<=p1.x+p1.w&&this.y<=p1.y+p1.h&&this.y>=p1.y){
            this.xDir*=-1;
            this.xVel =Math.floor((Math.random()*5)+7)*0.8;
        }
        if(this.x>=p2.x&&this.y<=p2.y+p2.h&&this.y>=p2.y){
            this.xDir*=-1;
            this.xVel =Math.floor((Math.random()*5)+7)*0.8;
        }
    
    }
}