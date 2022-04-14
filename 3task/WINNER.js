// массив объектов

class WINNER {
    constructor(str, what) {
        this.str = str;
        this.what = what;
    }
    get win() {
        let index_what;
        let l = this.str.length
        let step = Math.floor(l / 2);
        index_what = this.str.indexOf(this.what)
        var winner = [];

        if (index_what + step < l) {
            for (let i = index_what + 1; i <= index_what + step; i++) {
                winner.push(this.str[i]);
            }
            return winner;
        } else {
            let r = index_what + step - l;
            for (let i = index_what + 1; i < l; i++) {
                winner.push(this.str[i]);
            }
            for (let i = 0; i <= r; i++) {
                winner.push(this.str[i]);
            }
        }
        return winner;
    }
}

module.exports = WINNER;
