const express = require('express');

const {
    getPosts,
    getPost,
    createPost,
    delPost,
    patchPost
}             = require('../controllers/postControllers');

const router  = express.Router();

router.get('/',getPosts);

router.get('/:id',getPost);

router.post('/',createPost);

router.delete('/:id',delPost);

router.patch('/:id',patchPost);

module.exports = router;