require('dotenv').config()
const jwt = require("jsonwebtoken");
const tokenValidator = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log(authHeader);
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    console.log(token)
    jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        (err, decoded) => {
            console.log(err);
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded;

            next();
        }
    );
};
module.exports = tokenValidator;