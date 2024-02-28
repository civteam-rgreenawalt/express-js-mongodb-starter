const Blog = require("../models/Blog");
const logger = require('log4js').getLogger('userService');
const userService = require("./userService");


const blogService = {

    async getBlogs() {
        logger.trace('getBlogs');

        try {
            const books = await Blog.find();
            return books;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async createBlog(userId, blog) {
        logger.trace('createBlog');

        try {
            // 1) create the blog
            const createdBlog = await Blog.create(blog);
            
            // 2) push the blog to the user
            const blogId = createdBlog._id;
            await userService.addBlog(userId, blogId);

            return createdBlog;
        } catch (error) {
            throw new Error(error.message);
        }
    },

}

module.exports = blogService;