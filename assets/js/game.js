
class Game {
    settings = {
        triesLeft: 5,
        randomNumber: 0,
        min: 1,
        max: 10,
        isGameOver: false,

    }

    guesses = []

    start = function () {
        //set random number
        this.settings.randomNumber = Math.floor(Math.random() *
            (this.settings.max - this.settings.min + 1)) + this.settings.min;

        // this.playRound()
    }

    playRound = function (guess) {
        if (!this.settings.isGameOver) {

            // get number from user
            // addit to guesses
            if (this.isValidNumber(guess)) {

                this.guesses.push(guess)

                this.settings.triesLeft--
                //update is game is ended 
                this.settings.isGameOver = this.settings.triesLeft == 0
                // verify the number
                
                //if the game is not over re run playRound
                if (!this.settings.isGameOver) {
                    this.playRound()
                }
                return this.verify(guess)
            }

        }
    }

    isValidNumber = function (value) {
        return !isNaN(value)
    }
    verify = function (value) {

        //the users lost the game
        if (this.settings.isGameOver) {
            console.log("😫😫😫😫😫😫😫!!!!!!! ")
            this.playRound()
            return  "gameLost"
        }
        //the users won the game
        else if (value == this.settings.randomNumber) {
            console.log("🥳🎉 YOU WON !!!!!!! ")
            this.settings.isGameOver = true
            return "gameWon"
        } 
        else if (value > this.settings.randomNumber) {
            console.log("👇👇👇👇 you need less than ", value, "you still have ", this.settings.triesLeft)
            return "guessTooHigh"
        }

        else if (value < this.settings.randomNumber) {
            console.log("👆👆👆 you need more than ", value, "you still have ", this.settings.triesLeft)
            return "guessTooLow"
        }
    }
}

