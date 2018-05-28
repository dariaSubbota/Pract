const express = require('express');
const fs = require('fs');
const func = require('./server/script');

const postsPath = './server/data/posts.json';
const app = express();
app.use(require('body-parser').json());
app.use(express.static('public'));

app.post('/addPhotoPost', (req, res) => {
    const post = req.body;
    post.id = JSON.stringify(JSON.parse(fs.readFileSync('./server/data/temporaryId.json')).id);
    post.createdAt = new Date();
    if (func.addPhotoPost(post)) {
        res.send({ status: 'post added' });
    } else {
        res.send({ status: 'error' });
    }
});
app.get('/getPhotoPost', (req, res) => {
    if (req.query.id) {
        let post = func.getPhotoPost(req.query.id);
        if (post) {
            res.send(post);
        } else {
            res.status(302).send('error');
        }
    } else {
        res.status(400).send('error');
    }
});
app.post('/getPhotoPosts', (req, res) => {
    if (req.query.skip && req.query.top) {
        const skip = parseInt(req.query.skip);
        const top = parseInt(req.query.top);
        let filterConfig = req.body;
        if (JSON.stringify(filterConfig) === '{}') { filterConfig = undefined; }
        const result = func.getPhotoPosts(skip, top, filterConfig);
        res.status(200).send(result);
    } else {
        res.status(404).send('error');
    }
});
app.put('/editPhotoPost', (req, res) => {
    if (req.query.id && req.body) {
        if (func.editPhotoPost(req.query.id, req.body)) {
            res.status(200).send({ status: 'post edited' });
        } else {
            res.status(300).send('error');
        }
    } else {
        res.status(400).send('error');
    }
});
app.delete('/removePhotoPost', (req, res) => {
    if (req.query.id) {
        if (func.removePhotoPost(req.query.id)) {
            res.send("post deleted");
            res.status(200).end();
        } else {
            res.send("error").
            res.status(404).end();
        }
    } else {
        res.send("error");
        res.status(400).end();
    }
});

app.listen(3012, () => {
    console.log(('Server is runinng...'));
});