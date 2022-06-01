const express = require('express');
// const bodyParser = ("body-parser");
// const cors = require("cors");
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');
const bookmarkModel = require('./models/Bookmark.model.js');
const dbConfig = require("./config/db.config.js");

const app = express();

app.use(logger('dev'));
app.use(express.json());

mongoose.connect(dbConfig.url);
const bookmark = mongoose.model('bookmark', bookmarkModel);



// app.use(cors(cotsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./models")
// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to the database!");
//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
//     });

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));

//routes

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/', function (req, res) {
    res.send('hello world')

})

//send database success message 

app.post('/CreateNewBookmark', function (req, res) {
    console.log(req.body)
    res.redirect('back')
})

// app.post('/createNewBookmark', () => { LOGIC HERE })



// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server


const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});
