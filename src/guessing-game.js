class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        while (this.min <= this.max) {
            this.guessed = Math.round((this.min + this.max) / 2 );
            return this.guessed;
        }
    }

    lower() {
        if (this.guessed < this.max) {
            this.max = this.guessed;
        }
    }

    greater() {
        if (this.guessed > this.min) {
            this.min = this.guessed;
        }
    }
}

module.exports = GuessingGame;
