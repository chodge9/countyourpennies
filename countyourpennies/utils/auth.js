const jwt = require('jsonwebtoken');

const secret = '';
const expiration = '30m';

module.exports = {
    signToken: function({username, email, password}) {
        const payload = {username, email, password };

        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    }
}