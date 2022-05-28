const bookmark = require('../models/Bookmark.model')

const getAllBookmarks = async (req, res) => {
    try {
        const allBookmarks = await bookmark.find({})

        res.send({
            status: 200,
            data: allBookmarks
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            data: err
        })
    }
};

const createNewBookmark = async (req, res) => {
    try {
        await bookmark.create(req.body)

        res.send({
            status: 200,
            data: 'I have hit my post endpoint'
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            data: err
        })
    }
}

module.exports = {
    getAllBookmarks,
    createNewBookmark
}   