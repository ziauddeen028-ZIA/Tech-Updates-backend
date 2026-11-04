const Category = require('../models/Category');

const createCategory = async (req, res) => {
    try {
        const { name, description, slug} = req.body;
        const category = new Category({
            name, description, slug
        });
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        category.name = req.body.name || category.name;
        category.description = req.body.description || category.description;
        category.slug = req.body.slug || category.slug;

        const updatedcategory = await category.save();
        res.json(updatedcategory)

    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}

const deleteCategory = async (req, res) => {

    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        await Category.findByIdAndDelete(category.id);
        res.json({ msg: "Category Deleted Successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createCategory, getCategory, getCategoryById, updateCategory, deleteCategory
}