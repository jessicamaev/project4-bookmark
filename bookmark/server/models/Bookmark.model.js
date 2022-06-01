const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookmarkSchema = mongoose.Schema({

    url: {
        type: String, required: true
    },
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    }
}, {
    timestamp: true
}
)

module.exports = bookmarkSchema