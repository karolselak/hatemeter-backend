const {Period} = require('../models/period');
const express = require('express');
const router = express.Router();

router.post('/:agentId', async(req,res) => {
    const startTime = new Date();

    var lastPeriod = await Period.findOne({endTime: null});
    lastPeriod.endTime = startTime;
    res.send(lastPeriod);

    var period = new Period({
        agentId: req.bady.agentId,
        periodId: req.body.periodId,
        ifBreak: req.body.ifBreak,
        startTime: startTime,
        endTime: null,
        startEsteem: startTime,
        //endEsteem: 
    })

    period = await period.save();

    res.send(period);
});