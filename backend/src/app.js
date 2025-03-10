import express from 'express';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

export default app;