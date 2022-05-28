const express = require('express');
const router = express.Router();

const bookmark = require('../controllers/bookmark.controller')

router.post('/', function (req, res) {
    bookmark.createNewBookmark(req, res)
})

router.get('/', (req, res, thirdParam) => {
    res.send('THIS WORKS')
    bookmarkController.getAllBookmarks(req, res)
})

router.get('/', (bookmarkController.getAllBookmarks))

module.exports = router;