import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwtUtils.js';

export const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email)
        {
            return res.status(400).json({ message: 'Email is required' });
        }
        if(!password)
        {
            return res.status(400).json({ message: 'Password is required' });
        }
        const existingUser = await User.findOne({ email });
        if(existingUser)
        {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, passwordHash: hashedPassword });
        res.status(201).json(
            { message: 'User created successfully', userId: newUser.id }
        );
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email)
        {
            return res.status(400).json(
                { message: 'Email is required' }
            );
        }
        if(!password)
        {
            return res.status(400).json(
                { message: 'Password is required' }
            );
        }
        const user = await User.findOne({email: email});
        console.log(user)
        if (!user) {
            return res.status(401).json(
                { message: 'User not found!' }
            );
        }
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.status(401).json(
                { message: 'Invalid email or password' }
            );
        }
        const token = generateToken(user._id);
        res.status(200).json(
            { message: 'Login successful', token, userId:user._id }
        );
    } catch (error) {
        res.status(500).json(
            { message: 'Error logging in', error }
        );
    }
};