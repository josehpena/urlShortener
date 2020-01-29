const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes');

mongoose.connect('mongodb+srv://josehpena:penapena@cluster0-qbx2k.mongodb.net/test',
{   useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333)