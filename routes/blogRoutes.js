const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createBlog, getBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');

router.post('/',authMiddleware,createBlog);
router.get('/',getBlog);
router.get('/:id',getBlogById);
router.put('/:id',authMiddleware,updateBlog);
router.delete('/:id',authMiddleware,deleteBlog);

module.exports = router;