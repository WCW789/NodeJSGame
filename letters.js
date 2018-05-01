var underscore = "_";

var Letters = function(character) {
    this.character = character;
    this.used = false;

 this.getLetter = function(pick) {
        if (pick == this.character) {
            this.used = true;
            return this.character;
        } else {
            return underscore;
        }
   }  
}
module.exports = Letters;