const {Conversation} = require('../models/conversation');
const {Agents} = require('../models/agent');
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
<<<<<<< HEAD
router.put('/', async (req, res) => {
    if(!(await Agents.findOne({agentId: req.body.agentId}))){
        var agent = new Agents({
            agentId: req.body.agentId
        })
        agent = await agent.save();
        res.send(agent);
    }
    if (!(await Conversation.findOne({
            agentId: req.body.agentId, conversationId: req.body.conversationId
        }))) {
        var conversation = new Conversation({
            agentId: req.body.agentId,
            conversationId: req.body.conversationId,
            listOfMessages: [{
                message: req.body.message,
                messageRate: req.body.messageRate
            }]
        })

        conversation = await conversation.save();
        res.send(conversation);
    }
    else{
        var conversation = await Conversation.findOne({
            agentId: req.body.agentId,
            conversationId: req.body.conversationId
        });

        console.log(conversation.listOfMessages)
        conversation.listOfMessages.push({
            message: req.body.message,
            messageRate: req.body.messageRate
        })
        conversation = await conversation.save();

        console.log(conversation.listOfMessages)
        res.send(conversation);
    }
=======

router.put('/addMessage', async (req, res) => {
    var conversation = await Conversation.findOne({
        agentId: req.params.agentId,
        conversationId: req.params.conversationId
    });


    conversation.listOfMessages.push({
        message: "put user message here",
        messageRate: "putBOTrate"
    })


    res.send(conversation);
>>>>>>> 273d0858d152334c780f22b170bc052e9f93603a
})

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