class Laser  {
    constructor ( y, x, h, w ) {
        this.laserSize = { width: 16, height: 28 };
        this.x = x + w;
        this.y = y + (h/2) - (this.laserSize.height / 2);
        this.laserPosition;
        this.speed = 300;
        this.laser;

        
        this.init();  
    }


    init () {

        const laser = `<img id="shooter"
                            class="ship laser"
                            src="./img/lasers/laserBlue08.png"
                            style="width: ${this.laserSize.width}px;
                            height: ${this.laserSize.height}px;
                            top: ${this.y}px;
                            left: ${this.x}px">`;
               
            document.querySelector('.game').insertAdjacentHTML('beforeend', laser);  
            
            this.laser = document.querySelector('.laser');
           
            
    }

    
    move = (dt) => {
       console.log('sauna');

    //    this.laser.style.left =` ${this.laser.style.left + this.speed * dt}px`;
    //    console.log( this.laser.style.left);
    //    console.log(this.x);
    //---------------
    // let position = (this.laser.style.left);
    // if (position === 1365) {
    //     laser.remove()
    // } else {
    //     this.laser.style.left = `${this.x + this.speed * dt}px`;
    //     console.log(this.laser.style.left);
        
    // }

    let laserShoot = this.laser
    let leftpos = this.x
    setInterval(function(){
        if( leftpos === 1365 ){
            laserShoot.remove()
        } else {
        leftpos += 10
        laserShoot.style.left = leftpos  + 'px' 
        }
    }, 50)

    }   
}

export default Laser;