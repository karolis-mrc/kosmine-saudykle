import Player from "./spaceShip.js";

class ShooterGame {
    constructor (target, background) {
        this.DOM = document.querySelector(target);
        this.player = new Player();
        this.background = background;
       
        this.init();
        this.renderBackground();
    }
    
        init() {
            this.DOM.classList.add('game');
            this.player.renderShip(this.DOM);
        } 

        renderBackground() {
        const background = document.createElement('div');
        background.classList.add('space');
        document.getElementById('game').appendChild(background); 
        }
} 

export default ShooterGame;