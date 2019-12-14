class Player {
    constructor () {
        this.position;
        this.screenSize = {width: 1365, height: 655};
        this.shipSize = { width: 66, height: 50};
        this.shipSpeed = 300;
        this.keyboard;
        this.fireRate = 1; 
        this.lastFire = 0;
        this.fireHappened = false;
        this.keyboardPressed = {
            up: false,
            down: false,
            right: false,
            left: false
        };
        
        this.init();
    }

    init() {
        this.setInitialPosition();
    }

    setInitialPosition() {
        const coordinates = {
            top: (this.screenSize.height - this.shipSize.height)  / 2,
            left: 50
        }
        this.position = coordinates;   
    }

    renderShip = (DOM) => {
        const ship = `<img id="playerShip" class="ship"
                        src="./img/player-ships/playerShip1_blue.png"
                        style ="width: ${this.shipSize.width}px;
                                height: ${this.shipSize.height}px;
                                top: ${this.position.top}px;
                                left: ${this.position.left}px">`;
        DOM.innerHTML = ship;
     
        window.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 87:
                    this.keyboardPressed.up = true;
                    
                    break;
                case 83:
                    this.keyboardPressed.down = true;

                    break;
                case 65:
                    this.keyboardPressed.left = true;

                    break;
                case 68:
                    this.keyboardPressed.right = true;

                    break;
                case 32:
                    this.fire();
                    break;
            
                default:
                    break;
            }
        })

        window.addEventListener('keyup', (e) => {
            switch (e.keyCode) {
                case 87:
                    this.keyboardPressed.up = false;
                    
                    break;
                case 83:
                    this.keyboardPressed.down = false;

                    break;
                case 65:
                    this.keyboardPressed.left = false;

                    break;
                case 68:
                    this.keyboardPressed.right = false;

                    break;
                case 32:
                    this.fire();
                    break;
            
                default:
                    break;
            }
        }) 
    } 

    fire(){
        const time = Date.now();
        if ( time - this.lastFire >= this.fireRate * 1000 ) {
            this.lastFire = time;
            this.fireHappened = true;
        }
    }

    didFire = () => {
        if ( this.fireHappened ) {
            this.fireHappened = false;
            return true;
        }
        return false;
    }

    positionInfo = () => {
        return [ this.position.top, this.position.left ];
    }

    move = ( dt ) => {
        if ( this.keyboardPressed.up ) {
            this.position.top -= this.shipSpeed * dt;    
        }

        if ( this.keyboardPressed.down ) {
            this.position.top += this.shipSpeed * dt;
        }

        if ( this.keyboardPressed.left ) {
            this.position.left -= this.shipSpeed * dt;   
        }
        
        if ( this.keyboardPressed.right ) {
            this.position.left += this.shipSpeed * dt;
        }
        
        
        if ( this.position.top < 10 )
             this.position.top = 10;
            
        if ( this.position.top > this.screenSize.height - this.shipSize.height - 10 ) 
            this.position.top = this.screenSize.height - this.shipSize.height - 10;

        if ( this.position.left < 10 ) 
            this.position.left = 10;

        if ( this.position.left > this.screenSize.width / 2 - this.shipSize.width ) 
            this.position.left = this.screenSize.width / 2 - this.shipSize.width ;
            
            

        document.querySelector('.ship').style.top = this.position.top + 'px';
        document.querySelector('.ship').style.left = this.position.left + 'px';
    }
}

export default Player;



































// const spaceShip = document.getElementById('playerShip');


// function moveUp() {
//     let topPosition = window.getComputedStyle(spaceShip).getPropertyValue('top');
   
//     if (spaceShip.style.top === '0px') {
//         return;
//     } else {
//         let position = parseInt(topPosition);
//         position -= 5;
//         spaceShip.style.top = `${position}px`;
//     } console.log('kylam');
//     console.log(topPosition);
    
    
    
// }

// function moveDown() {
//     let topPosition = window.getComputedStyle(spaceShip).getPropertyValue('top');
// console.log(top);

//     if (spaceShip.style.top === '-330px') {
//         return;
//     } else {
//         let position = parseInt(topPosition);
//         position += 5;
//         spaceShip.style.top = `${position}px`;
//     } console.log('leidziames');
    
// }


// function shipControl(event) {

//     if (event.key === 'ArrowUp') {
//                 event.preventDefault()
//                 moveUp()
//     }   
//     if (event.key === 'ArrowDown') {
//                 event.preventDefault()
//                 moveDown()
//     }
//     if (event.key === '65') {
//         event.preventDefault()
//         moveLeft()
//     }   
//     if (event.key === '68') {
//             event.preventDefault()
//             moveRight()
//     }
// }
// window.addEventListener('keydown', shipControl);








