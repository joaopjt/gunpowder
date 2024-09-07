const powder = require('./gunpowder.json');

class Gunpowder {
    constructor() {
        return null;
    }
    
    static get powder(hex) {
        if (hex.length !== 3) {
            console.error('The hex code length should be equal to 3 characters long.');
            
            return false;
        }
        
        return powder[hex[0]][hex[1]][hex[2]];
    }
}

module.exports.Gunpowder = Gunpowder;
