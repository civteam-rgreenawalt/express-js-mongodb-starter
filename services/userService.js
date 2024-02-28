const mongoose = require("mongoose");
const models = require("../models");
const logger = require('log4js').getLogger('userService');
const User = models.User;

const userService = {

    async getUsers() {
        logger.trace('getting users');
        try {
            const users = await User.find({}).populate('blogs');
            return users;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    async getUserById(id) {
        logger.trace(`getting user by id ${id}`);
        try {
            const users = await User.findById(id).populate('blogs');
            return users;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    async createUser(user) {
        logger.trace(`creating user: `, user);
        try {
            const createdUser = await User.create(user);
            return createdUser;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    async addBlog(userId, blogId) {
        logger.trace(`adding blog Id to user ${userId}: `, blogId);

        const isIdValid = mongoose.Types.ObjectId.isValid(blogId);
        logger.debug(`isIdValid? ${isIdValid}`);
        if (!isIdValid) {
            throw new Error(`invalid blogId ${blogId}`);
        }

        try {
            const userWithNewBlog = await User.findOneAndUpdate(
                { _id: userId },
                { $push: { blogs: blogId } },
                { new: true }
            );

            return userWithNewBlog;

        } catch (err) {
            throw new Error(err.message);
        }
    },


}

module.exports = userService;