const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({

    url: {
        type: String, required: true
    },
    title: {
        type: String, required: true
    },
    description: {
        type: Number,
        min: 18
    }
}, {
    timestamp: true
}
)

module.exports = mongoose.model('bookmark', 'bookmarkSchema')