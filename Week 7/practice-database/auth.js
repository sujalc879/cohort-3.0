const jwt = require("jsonwebtoken");
const JWT_SECRETE = "sujal";

function auth(req, res, next) {
    const token = req.headers.token;

    try {
        const response = jwt.verify(token, JWT_SECRETE);

        req.id = response.id;
        next();

    } catch (error) {
        res.status(403).json({ Message : "invalid token"});
    }
}

module.exports = {
    auth,
    JWT_SECRETE
}