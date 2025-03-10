import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { createPost, editPost, getAllPosts, getPostById, getPostsByAuthor } from '../controllers/postController.js';


const router = express.Router();

router.post('/post', authMiddleware, createPost);
router.get('/posts', getPostsByAuthor);
router.get('/getAllPosts', getAllPosts);
router.put('/posts/edit/:postId', authMiddleware, editPost);
router.get('/posts/get/:postId', getPostById);


export default router;