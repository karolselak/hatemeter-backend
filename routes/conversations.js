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

    // check if it works
    conversation.listOfMessages.push({
        message: "put user message here",
        messageRate: "putBOTrate"
    })

    conversation = await conversation.save();
    res.send(conversation);
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