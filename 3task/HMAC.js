//HMAC
var forge = require('node-forge');

class HMAC {
    constructor(text) {
        this.text = text;
    }

    get hmac() {
        var k_t = [];
        var crypto = require('crypto');
        var algorithm = 'sha256';
        var hash, hmac;

        var md = forge.md.sha256.create();
        k_t.push(md.digest().toHex());

        hmac = crypto.createHmac(algorithm, md.digest().toHex());
        hmac.update(this.text);
        k_t.push(hmac.digest('hex'));
        return k_t;

    }
}
module.exports = HMAC;



/*
let t = ['a', 'b', 'c', 'd', 'e'];


const hmacs = new HMAC(t[0])
console.log(hmacs.hmac[0]);*/