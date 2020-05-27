const express = require('express');

const router = express.Router();

const feedController = require('../controllers/feed');

router.get('/post', feedController.createPost); 

router.get('/posts', feedController.getPosts);



module.exports = router;