const jwt = require('jsonwebtoken');
const JWT_SECRETE = "sujal";

function auth(req, res, next) {
    const token = req.headers.authorization;

    try {
        const response = jwt.verify(token, JWT_SECRETE);

        req.userId = response.id;

        next();

    } catch (error) {
        res.json({ Message : "Your Token is Invalid"});
    }

}

module.exports = {
    auth,
    JWT_SECRETE
}