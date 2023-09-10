const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Sample blog post data (you can replace this with a database)
const blogPosts = [
    {
        id: 1,
        title: "First Blog Post",
        content: "This is the content of the first blog post.",
    },
    {
        id: 2,
        title: "Second Blog Post",
        content: "This is the content of the second blog post.",
    },
    {
        id: 3,
        title: "Third Blog Post",
        content: "This is the content of the third blog post.",
    },
];

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to enable CORS (for development, you can restrict this in production)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Route to get all blog posts
app.get('/api/posts', (req, res) => {
    res.json(blogPosts);
});

// Route to get a single blog post by ID
app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find(post => post.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
});

// Route to create a new blog post
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: blogPosts.length + 1,
        title,
        content,
    };
    blogPosts.push(newPost);
    res.status(201).json(newPost);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
