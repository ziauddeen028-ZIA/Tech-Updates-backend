const express = require('express');
const router = express.Router();

const { createBlog, getBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');

router.post('/',createBlog);
router.get('/',getBlog);
router.get('/:id',getBlogById);
router.put('/:id',updateBlog);
router.delete('/:id',deleteBlog);

module.exports = router;