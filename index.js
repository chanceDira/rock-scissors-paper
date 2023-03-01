// How it works?
// Game of the rock-scissors-paper
// Stone wins over scissors because stone is hard and cannot be cut with scissors.
// Scissors win over paper because scissors can cut paper.
// Paper wins over stone because paper can wrap stone.

const prompt=require("prompt-sync")({sigint:true}); 

console.log("Game of the rock-scissors-paper");
console.log("0=rock, 1=scissors, 2=paper");

const play = () => {
    let your_hand = parseInt(prompt("Input your hand choice: "));
    let computer_hand = Math.floor(Math.random() * 3);
    
    console.log('Your hand: ' + your_hand + ' Computer_hand: ' + computer_hand)
    
    switch(your_hand) {
        case 0:
            if(computer_hand == 0) {
                console.log('draw')
            }else if(computer_hand == 1) {
                console.log('win')
            } else {
                console.log('lose')
            }
            break;
        case 1:
            if(computer_hand == 0) {
                console.log('lose')
            }else if(computer_hand == 1) {
                console.log('draw')
            } else {
                console.log('win')
            }
            break;
        case 2:
            if(computer_hand == 0) {
                console.log('win')
            }else if(computer_hand == 1) {
                console.log('lose')
            } else {
                console.log('draw')
            }
            break;
        default:
            console.log('Wrong input, try again !!')
    }
}

play()
