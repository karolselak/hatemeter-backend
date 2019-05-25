const mongoose = require('mongoose');
const express = require('express');
const app = express();
const agent = require('./routes/agents');
const conversation = require('./routes/conversations');
const period = require('./routes/periods');

mongoose.connect("mongodb+srv://Piter:Piter2013@cluster0-ezldk.gcp.mongodb.net/test?retryWrites=true", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());

app.use('/agents', agent); //add user
app.use('/conversations', conversation) //add message
app.use('/listenPeriods', period)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));