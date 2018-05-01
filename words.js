var Letters = require("./letters");
var newArray = [];

function Word(ulWord) {
    this.ulWord = ulWord;
    this.letterArray = [];
    this.picked = false;

    this.letterLoop = function () {
        console.log("This is how many letters are in the word.  You get TEN guesses:")
        for (i = 0; i < this.ulWord.length; i++) {
            var whatLetter = new Letters(this.ulWord[i]);
            this.letterArray.push(whatLetter);

            Letters.prototype.toString = function(character) {
                if (this.picked == true) {
                    return this.character;
                } else {                    
                    return "_";
                }
            }
         }
        console.log(this.letterArray.toString().split(",").join(" "));
        
         for (var r = 0; r < ulWord.length; r++) {
            for (var q = 2; q < ulWord.length + (12 - ulWord.length); q++) {
            if (process.argv[q] == this.letterArray[r].character[0] && newArray.indexOf(this.letterArray[r].character[0]) == -1) {
                console.log("You got letter #" + (r + 1) + " right!");
                newArray.push(process.argv[q]);
          }
        }
     }
        console.log(newArray.toString().split(",").join(" "));
 }
}
module.exports = Word;