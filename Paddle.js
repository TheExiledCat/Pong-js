class Paddle{
    constructor(x,y,w,h){
        this.x =x;
        this.y=y;
        this.w=w;
        this.h=h;
       
        this.speed =20*0.8;
        
    }
     draw(){
            //draw paddle
            ctx.beginPath();
            ctx.fillStyle='white';
            ctx.fillRect(this.x,this.y,this.w,this.h);
            ctx.closePath();
            this.y=clamp(this.y,0,canvas.height-this.h);
            
    }
                
}
            
            
            
            
            

            
        
