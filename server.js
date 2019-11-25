const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(_dirname, 'dist')));

app.use('/posts', posts);

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'dist/CNSWebPortal/index.html'))
})


app.listen(4600, (req, res) => {
    console.log("Running");
});
