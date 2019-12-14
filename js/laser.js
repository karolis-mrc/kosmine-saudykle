class Laser  {
    constructor ( x, y ) {
        this.x = x;
        this.y = y;
        this.position;
        this.laserSize = { width: 16, height: 28 };
        this.speed = 300;

        this.init();
    }


    init() {

        const laser = `<img class="ship laser"
                            src="./img/lasers/laserBlue09.png"
                            style="width: ${this.laserSize.width}px;
                            height: ${this.laserSize.height}px;
                            top: ${this.y}px;
                            left: ${this.x}px">`;
               
               
               console.log(this.y);
               console.log(this.x);
               
               
               
            
            document.getElementById('playerShip').innerHTML = laser;
    }

    move = (dt) => {
        console.log('skrenda kulka...');
        


        if ( this.keyboardPressed.up ) {
            this.position.top -= this.shipSpeed * dt;    
        }
            this.x += this.Speed * dt;
        
        document.querySelector('.laser').style.left = this.x + 'px';
    }
}

export default Laser;