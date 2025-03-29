import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const newBlog = new Blog({ title, subtitle, description, likes: [] });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('likes', '_id name');  // Populate likes
    res.json(blogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/:id', async (req, res) => {
    try {
      const blogs = await Blog.findById(req.params.id)
      res.json(blogs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  

router.put('/like/:id', async (req, res) => {
  const { userId } = req.body;
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).send('Blog not found');

    const index = blog.likes.indexOf(userId);
    if (index === -1) {
      blog.likes.push(userId);
    } else {
      blog.likes.splice(index, 1);
    }

    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
