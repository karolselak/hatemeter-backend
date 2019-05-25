const {Agents} = require('../models/agent');
const express = require("express")
const router = express.Router()

router.post('/', async (req, res) => {
    var agent = new Agents({
        agentId: req.body.agentId
    })  
    agent = await agent.save();
    res.send(agent);
})

router.get('/:agentId', async (req, res) => {
    const agent = await Agents.findOne({agentId: req.params.agentId});

    res.send(agent);
})

module.exports = router