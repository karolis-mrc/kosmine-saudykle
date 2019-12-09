class Player {
    constructor(shipColor) {
        this.shipColor = shipColor || 'blue';
        this.keyboard;
        this.contorlKeys();
        this.laserRate = 3;
    }
    
        contorlKeys(){
            const controls = [
                { up:'w', down:'s', left:'a', right:'d', laser:'space'}
            ];

            this.keyboard = controls;
        }

        renderShip = (DOM) => {
            const ship = `<img id="playerShip" src="./img/player-ships/playerShip1_${this.shipColor}.png"></img>`;
            DOM.innerHTML = ship;
            console.log(ship);
            
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








