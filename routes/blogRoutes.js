const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createBlog, getBlog, getBlogById, updateBlog, deleteBlog,getBlogBySlug } = require('../controllers/blogController');

router.post('/',authMiddleware,createBlog);
router.get('/',getBlog);
router.get('/:id',getBlogById);
router.get('/slug/:slug', getBlogBySlug);
router.put('/:id',authMiddleware,updateBlog);
router.delete('/:id',authMiddleware,deleteBlog);

module.exports = router;