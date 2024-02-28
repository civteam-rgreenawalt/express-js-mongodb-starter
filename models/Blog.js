const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  body: String
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;