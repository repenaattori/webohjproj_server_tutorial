require('dotenv').config();
const student = require('./routes/student');
const auth = require('./routes/authentication');
const cors = require('cors');

const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

app.use( express.urlencoded({extended: false}) );
app.use(upload.none());
app.use(express.json());
app.use(cors());

//Adding routes
app.use('/student', student);
app.use('/auth',  auth);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server running:' + PORT);
});

app.get('/', (req, res) => {
    res.json( {info: 'hei'} );
});

module.exports = app;