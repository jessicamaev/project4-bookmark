const db = require('../models');
const Bookmark = db.bookmarks;


// Create and Save a new Bookmark
exports.create = (req, res) => {

};
// Retrieve all Bookmarks from the database.
exports.findAll = (req, res) => {

};
// Find a single Bookmark with an id
exports.findOne = (req, res) => {

};
// Update a Bookmark by the id in the request
exports.update = (req, res) => {

};
// Delete a Bookmark with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Bookmarks from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Bookmarks
exports.findAllPublished = (req, res) => {

};


// const getAllBookmarks = async (req, res) => {
//     try {
//         const allBookmarks = await bookmark.find({})

//         res.send({
//             status: 200,
//             data: allBookmarks
//         })
//     } catch (err) {
//         res.status(500).send({
//             status: 500,
//             data: err
//         })
//     }
// };

// const createNewBookmark = async (req, res) => {
//     try {
//         await bookmark.create(req.body)

//         res.send({
//             status: 200,
//             data: 'I have hit my post endpoint'
//         })
//     } catch (err) {
//         res.status(500).send({
//             status: 500,
//             data: err
//         })
//     }
// }

// module.exports = {
//     getAllBookmarks,
//     createNewBookmark
// }   