import secretKey from '../config/jwtConfig.js';
import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized: Missing token!' });
    }
    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized: invalid token format" });
    }
    jwt.verify(token, secretKey.secretKey, (err, user) => {
        if (err) {
            // console.error("JWT Verification Error:", err); // Log the error for debugging
            return res.status(403).json({ message: 'Forbidden: Invalid Token' });
        }
        req.user = user;
        next();
    });
}

function verifyToken(token){
    return jwt.verify(token,secretKey.secretKey)
}

export default {authenticateToken, verifyToken};
