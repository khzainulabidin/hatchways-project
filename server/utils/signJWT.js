const jwt = require("jsonwebtoken");

/*
* Signs JWT token
* Checks and uses JWT_EXPIRES_IN, if its available in .env file
* Default expiresIn is 24 hours
* */

const signJWT = id => {
    return jwt.sign(
        { id },
        process.env.SESSION_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || 86400 }
    );
}

module.exports = signJWT;
