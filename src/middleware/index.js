const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    const token = jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });

    return token;
}

module.exports = generateToken;