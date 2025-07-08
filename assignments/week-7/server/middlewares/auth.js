const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.JWT_SECRET;


async function authMiddleware(req, res, next) {
//  authMiddleware logic here 
const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({ Message : "Authorization header is missing"});
} else {
    try {
        const token = authHeader.split(" ")[1];
    
        const decoded = jwt.verify(token, secret);
    
        req.userId = decoded.adminUserId;
    
        next();
        
    } catch (error) {
        res.json({ Message : "invalid credentials"});
    }
}

};

module.exports = {
    authMiddleware
}