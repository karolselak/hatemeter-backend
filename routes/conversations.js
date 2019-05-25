const {Conversation} = require('../models/conversation');
const express = require("express")
const router = express.Router()

/** adding new conversation */
router.post('/', async (req, res) => {
    var conversation = new Conversation({
        agentId: req.body.agentId,
        conversationId: req.body.conversationId,
        listOfMessages: req.body.listOfMessages //array of objects
    })

    conversation = await conversation.save();
    res.send(conversation);
})

/** adding new object(message) to the converstion */
router.put('/:agentId/:conversationId', async (req, res) => {
    var conversation = await Conversation.findOne({
        agentId: req.params.agentId,
        conversationId: req.params.conversationId        
    });

    var myJSONObject = {
        "documents": [{
            "language": "en",
            "id": "1",
            "text": req.params.message
        }]
    };
    fetch('https://francecentral.api.cognitive.microsoft.com/text/analytics/v2.1/sentiment', {
        method: 'POST',
        headers: {
            "Ocp-Apim-Subscription-Key": "718a10e484374595a185d7b640303912",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(myJSONObject)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        var rate =data.documents[0].score;
        // check if it works
        conversation.listOfMessages.push({
            message: req.params.message,
            messageRate: rate
        })

        conversation = await conversation.save();
        res.send(conversation);

    });


   
})

/** updating new object(message) to the converstion */
// router.put('/:agentId', async (req, res) => {
//     var conversation = await Conversation.findOneAndUpdate({
//         agentId: req.params.agentId
//     });

//     conversation = new Conversation({
//         agentId: req.body.agentId,
//         conversationId: req.body.conversationId,
//         listOfMessages: req.body.listOfMessages
//     })

//     conversation = await conversation.save();
//     res.send(conversation);
// })

/** taking all conversations for one agent */
router.get('/:agentId', async (req, res) => {
    const conversation = await Conversation.findOne({agentId: req.params.agentId});
    // to fix
    res.send(conversation);
})


/** taking one conversation for an agent with object as its messages */
router.get('/:agentId/:conversationId', async (req, res) => {
    const conversation = await Conversation.findOne({
        agentId: req.params.agentId,
        conversationId: req.params.conversationId
    });
    res.send(conversation);
})

module.exports = router