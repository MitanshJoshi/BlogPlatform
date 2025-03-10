import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import User from '../models/userModel.js';

const verifyToken = promisify(jwt.verify);

export const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer') ? req.headers.authorization.split(' ')[1] : null;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = await verifyToken(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-passwordHash');
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
