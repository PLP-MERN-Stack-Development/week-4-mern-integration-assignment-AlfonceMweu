const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Post routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;