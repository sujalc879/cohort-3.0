const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET_FOR_ADMIN = process.env.JWT_SECRET_FOR_ADMIN;


async function adminMiddleware(req, res, next) {
//  authMiddleware logic here 
const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({ Message : "Authorization header is missing"});
} else {
    try {
        const token = authHeader.split(" ")[1];
    
        const decoded = jwt.verify(token, JWT_SECRET_FOR_ADMIN);
    
        req.userId = decoded.adminUserId;
    
        next();
        
    } catch (error) {
        res.json({ Message : "invalid credentials of admin"});
    }
}

};

module.exports = {
    adminMiddleware
}