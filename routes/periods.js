const {Period} = require('../models/period');
const express = require('express');
const router = express.Router();

router.post('/:agentId', async(req,res) => {
    const startTime = new Date();

    var lastPeriod = await Period.findOne({endTime: null});
    lastPeriod.endTime = startTime;

    var period = new Period({
        agentId: req.bady.agentId,
        periodId: req.body.periodId,
        ifBreak: req.body.ifBreak,
        startTime: startTime,
        endTime: null
    })

    period = await period.save();

    res.send(lastPeriod);
    res.send(period);
});

router.put('/:agentId', async (req, res) => {

});