import Post from '../models/postModel.js';
import User from '../models/userModel.js';


//create post
export const createPost = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    const authorId = req.user._id;
    console.log(req.user);
    try {
        const newPost = new Post({
            title,
            content,
            authorId,
            createdAt: new Date()
        });

        await newPost.save();
        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error: error.message });
    }
};

// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('authorId', 'email'); // Populate authorId with user email
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error: error.message });
    }
};

// Get posts by author
export const getPostsByAuthor = async (req, res) => {
    const { authorId } = req.query;
    if (!authorId) {
        return res.status(400).json({ message: 'Author ID is required' });
    }
    try {
        const author = await User.findById(authorId);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        const posts = await Post.find({ authorId }).populate({
            path: 'authorId',
            select: 'email',
            model: 'User',
            as: 'author'
        });
        res.status(200).json(posts.map(post => ({
            ...post.toObject(),
            author: post.authorId,
            authorId: undefined
        })));
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts by author', error: error.message });
    }
};


// edit post
export const editPost = async (req, res) => {
    const { postId } = req.params;
    const { title, content } = req.body;
    const authorId = req.user._id;
    try {
        const post = await Post.findOne({ _id: postId });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        if (post.authorId.toString() !== authorId.toString()) {
            return res.status(403).json({ message: 'You are not authorized to edit this post' });
        }
        await Post.updateOne({ _id: postId }, { title, content });
        res.status(200).json({ message: 'Post updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating post', error: error.message });
    }
}


// get Post By Id
export const getPostById = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findOne({ _id: postId }).populate('authorId', 'email');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving post', error: error.message });
    }
}
