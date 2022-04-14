//START GAME
const HMAC = require('./HMAC.js')
const WINNER = require('./WINNER.js')

function menu(str = null) {
    console.log("Available moves: ")
    for (let i = 0; i <= l - 1; i++) {
        console.log(" ", i + 1, "- ", str[i])
    }
    console.log(" ", 0, " - exit \n", " ? - help");
    return "";
}


function end(str, enter) {
    if (enter == "0") return "come back =)";
    if (enter == "?") return "Your move: help";
    console.log("Your move:", str[enter - 1])
        // Computer move   
    console.log("Computer move: ", comp)
        //winner
    const winner = new WINNER(str, str[enter - 1])
    win = winner.win;
    //Who winner
    if (comp == str[enter - 1]) console.log("Draw");
    if (win.includes(comp) && comp != str[enter - 1]) console.log("You winner!!");
    if (!(win.includes(comp)) && comp != str[enter - 1]) console.log("You lose");
}

function game(str = null) {

    l = str.length;
    //mistakes
    if (l < 3) return "Values less than three!";
    if (l % 2 == 0) return "Falthe values must be an odd numberse!";

    //computer selection
    comp = str[Math.floor(Math.random() * str.length)];
    //HMAC 
    const hmacs = new HMAC(comp)
    key_hmac = hmacs.hmac;
    console.log("HMAC: ", key_hmac[1]);
    //menu
    menu(str);
    //enter gamer
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readline.question("Enter your move: ", enter => {
        readline.close();
        end(str, enter);
        //comp key
        console.log("HMAC key: ", key_hmac[0]);
        return "";
    })
}

console.log(game(process.argv.slice(2)));
