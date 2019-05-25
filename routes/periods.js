const {Period} = require('../models/period');
const express = require('express');
const router = express.Router();

router.post('/', async(req,res) => {
    const startTime = new Date();

    var lastPeriod = await Period.findOne({endTime: null});
    lastPeriod.endTime = startTime;
    lastPeriod.endEsteem = req.body.endEsteem;
    res.send(lastPeriod);

    var period = new Period({
        agentId: req.bady.agentId,
        periodId: req.body.periodId,
        ifBreak: req.body.ifBreak,
        startTime: startTime,
        endTime: null,
        startEsteem: req.body.startEsteem,
        endEsteem: null
    })

    period = await period.save();

    res.send(period);
});

module.exports = router