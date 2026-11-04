const Blog = require('../models/Blog');

const createBlog = async (req, res) => {
    try {
        const { title, description, slug, category, content, image, author, publishedAt, readTime, status } = req.body;
        const blog = new Blog({
            title, description, slug, content, image, author, publishedAt, readTime, status, category
        });
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.find().populate('category');
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('category');
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBlogBySlug = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            slug: req.params.slug
        }).populate('category');

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json(blog);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        blog.title = req.body.title || blog.title;
        blog.description = req.body.description || blog.description;
        blog.slug = req.body.slug || blog.slug;
        blog.category = req.body.category || blog.category;
        blog.content = req.body.content || blog.content;
        blog.image = req.body.image || blog.image;
        blog.author = req.body.author || blog.author;
        blog.publishedAt = req.body.publishedAt || blog.publishedAt;
        blog.readTime = req.body.readTime || blog.readTime;
        blog.status = req.body.status || blog.status;

        const updatedBlog = await blog.save();
        res.json(updatedBlog)

    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}

const deleteBlog = async (req, res) => {

    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        await Blog.findByIdAndDelete(blog.id);
        res.json({ msg: "Blog Deleted Successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createBlog, getBlog, getBlogById, updateBlog, deleteBlog,getBlogBySlug
}