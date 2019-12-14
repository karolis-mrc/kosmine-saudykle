import Player from "./spaceShip.js";
import Laser from "./laser.js";

class ShooterGame {
    constructor (target, background) {
        this.game;
        this.dt = 0;
        this.DOM = document.querySelector(target);
        this.player = new Player();
        this.background = background;
        this.lasers = [];
        
       
        this.init();
        this.renderBackground();
    }
    
        init() {
            this.DOM.classList.add('game');
            this.player.renderShip(this.DOM);
            this.game = window.requestAnimationFrame(() => {
                this.start()
            })
        } 

        renderBackground() {
        const background = document.createElement('div');
        background.classList.add('space');
        document.getElementById('game').appendChild(background); 
        }  
        
        start() {
            const now = Date.now();
            this.dt = (now - this.gameTime) / 1000;
            this.gameTime = now;
            
            this.player.move( this.dt );

// kulku atsiradimas ir skrydimas
            // tanko objektas savo viduje tai suvaldo
            
            if ( this.player.didFire() ) {
                this.lasers = [...this.lasers, new Laser( this.game, ...this.player.positionInfo() )];
                
            }
            for ( let l=0; l<this.lasers.length; l++ ) {
                const laser = this.lasers[l];
                laser.move();
                 
            }

           window.requestAnimationFrame(() => {
                this.start()
            })
        }
} 

export default ShooterGame;