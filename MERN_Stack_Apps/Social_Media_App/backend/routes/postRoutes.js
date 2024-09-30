const express = require('express');
const router  = express.Router();
const {
    getPosts,
    getPost,
    getAnotherUserPosts,
    createPost,
    deletePost,
    updatePost,
    getMyPosts
}             = require('../controllers/postControllers');
const requAuth = require('../middleware/requireAuth');

router.use(requAuth);

router.get('/',getPosts);

router.get('/myposts',getMyPosts);

router.get('/others/name',getAnotherUserPosts);

router.post('/',createPost);

router.get('/:id',getPost);

router.delete('/:id',deletePost);

router.patch('/:id',updatePost);

module.exports = router;