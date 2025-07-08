const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET_FOR_USER = process.env.JWT_SECRET_FOR_USER;



async function userMiddleware(req, res, next) {
//  authMiddleware logic here 
const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({ Message : "Authorization header is missing"});
} else {
    try {
        const token = authHeader.split(" ")[1];
        
        const decoded = jwt.verify(token, JWT_SECRET_FOR_USER);
    
        req.userId = decoded.adminUserId;
    
        next();
        
    } catch (error) {
        res.json({ Message : "invalid credentials of user"});
    }
}

};

module.exports = {
    userMiddleware
}