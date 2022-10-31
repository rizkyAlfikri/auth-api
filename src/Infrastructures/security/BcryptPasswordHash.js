const PasswordHash = require('../../Applications/security/PasswordHash');

class BcryptPasswordHash extends PasswordHash {
    constructor(bycrypt, saltRound = 10) {
        super();
        this._bycrypt = bycrypt;
        this._saltRound = 10;
    }

    async hash(password) {
        return this._bycrypt.hash(password, this._saltRound);
    }
}

module.exports = BcryptPasswordHash;