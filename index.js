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
<<<<<<< HEAD
app.use('/agents', agent); //add user
app.use('/conversations', conversation) //add message
app.use('/periods', period)
=======

app.use('/agents', agent); //add user
app.use('/conversations', conversation) //add message
app.use('/listenPeriods', period)
>>>>>>> 273d0858d152334c780f22b170bc052e9f93603a

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));