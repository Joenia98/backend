const jwt = require('jsonwebtoken');

const createJWToken = user=>{
    return jwt.sign({user},'aloha',{
        expiresIn: '1h'
    })
}

module.exports = {
    createJWToken,
}