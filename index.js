const mongoose = require('mongoose');
const express = require('express');
const app = express();
const agent = require('./routes/agents');
const conversation = require('./routes/conversations');

mongoose.connect("mongodb+srv://Piter:Piter2013@cluster0-ezldk.gcp.mongodb.net/test?retryWrites=true", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
/** optional */
app.use('/agents', agent); //add user
app.use('/conversations', conversation) //add message

console.log("work!");
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));