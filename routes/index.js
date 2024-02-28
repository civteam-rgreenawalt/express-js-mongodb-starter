const router = require('express').Router({ mergeParams: true });
const blogService = require('../services/blogService');
const userService = require('../services/userService');



router.get('/', (req, res) => {
    const now = new Date();
    const today = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    res.send(`App is listening as of ${today} at ${time}`);
});


router.post('/api/users', async (req, res) => {
    const user = req.body;
    if (!user) {
        return res.status(400).send('Please provide a req.body for the user you want to create');
    }
    try {
        const createdUser = await userService.createUser(user);
        res.status(201).json(createdUser);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
})

router.get('/api/users', async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
})

router.get('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('You are missing req.params.id');
    }
    try {
        const users = await userService.getUserById(id);
        res.json(users);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
})

router.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await blogService.getBlogs();
        res.json(blogs);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
})


router.post('/api/blogs/', async (req, res) => {
    const blog = req.body.blog;
    const userId = req.body.userId;

    logger.debug('blog: ', blog);
    logger.debug('userId: ', userId);

    if (!blog) {
        return res.status(400).send('Error - please provide a blog to create');
    }
    if (!userId) {
        return res.status(400).send('Error - please provide a userId to create the blog for');
    }
    try {
        const createdBlog = await blogService.createBlog(userId, blog);
        res.status(201).json(createdBlog);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
})

module.exports = router;