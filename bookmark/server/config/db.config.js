//how to connect back-end? (after finishing react?)

// const mongoose = require('mongoose');


// mongoose.connect("mongodb://localhost:27017/bookmark");

//     useNewUrlParser: true
// });

// const db = mongoose.connection;

// db.on('connected', () => {
//     console.log(`connected with mongodb ${db.host}:${db.port}`)
// })

module.exports = {
    url: "mongodb://localhost:27017/bookmark"
};

