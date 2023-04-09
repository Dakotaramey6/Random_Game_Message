//This object is the main hub for arrays in this generator
const randomMessage = {
    firstPart : ['I should', 'I cant', 'I should tell people to', 'I wont', 'I will', 'I am going to', "i'll tell my friends to"], // 7 strings in array
    secondPart : ['buy', 'play', 'check out', 'wait for a sale on', 'leave a review on', 'hop on', 'delete'], // 7 strings in array
    game : ['Diablo', 'Skyrim', 'Stardew Valley', 'Minecraft', 'Cyberpunk 2077', 'It Takes two', 'Call Of Duty'] // 7 strings in array
};
// all three functions do the same. They get a random number and utilize a switch statment to access the object above with a given number.
function getFirstArray() {
        let randomNum = Math.floor(Math.random() * 7); //blocked scoped randomnum so i could get 3 numbers that are random and may not be the same.
        console.log(randomNum);
        switch(randomNum) { 
            case 0:
                return randomMessage.firstPart[0];
            case 1:
                return randomMessage.firstPart[1];
            case 2: 
                return randomMessage.firstPart[2];
            case 3:
                return randomMessage.firstPart[3];
            case 4: 
                return randomMessage.firstPart[4];
            case 5:
                return randomMessage.firstPart[5];
            case 6: 
                return randomMessage.firstPart[6];
            default:
                return 'ERROR';
            break;


        }
};
function getSecondArray() {
    let secondrandomNum = Math.floor(Math.random() * 7);
    console.log(secondrandomNum);
    switch(secondrandomNum) {
        case 0:
            return randomMessage.secondPart[4];
        case 1:
            return randomMessage.secondPart[6];
        case 2: 
            return randomMessage.secondPart[5];
        case 3:
            return randomMessage.secondPart[3];
        case 4: 
            return randomMessage.secondPart[2];
        case 5:
            return randomMessage.secondPart[0];
        case 6: 
            return randomMessage.secondPart[1];
        default:
            return 'ERROR';
        break;


    }
};
function getGameArray() {
    let thirdrandomNum = Math.floor(Math.random() * 7);
    console.log(thirdrandomNum);
    switch(thirdrandomNum) {
        case 0:
            return randomMessage.game[6];
        case 1:
            return randomMessage.game[5];
        case 2: 
            return randomMessage.game[4];
        case 3:
            return randomMessage.game[3];
        case 4: 
            return randomMessage.game[2];
        case 5:
            return randomMessage.game[1];
        case 6: 
            return randomMessage.game[0];
        default:
            return 'ERROR';
        break;


    }
};
console.log(getFirstArray() + ' '+ getSecondArray() + ' ' +getGameArray() + '.');