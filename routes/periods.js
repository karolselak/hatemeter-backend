const {Period} = require('../models/period');
const express = require('express');
const router = express.Router();

<<<<<<< HEAD
router.post('/', async(req,res) => {
=======
router.post('/:agentId', async(req,res) => {
>>>>>>> 273d0858d152334c780f22b170bc052e9f93603a
    const startTime = new Date();

    var lastPeriod = await Period.findOne({endTime: null});
    lastPeriod.endTime = startTime;
<<<<<<< HEAD
    lastPeriod.endEsteem = req.body.endEsteem;
    res.send(lastPeriod);
=======
>>>>>>> 273d0858d152334c780f22b170bc052e9f93603a

    var period = new Period({
        agentId: req.bady.agentId,
        periodId: req.body.periodId,
        ifBreak: req.body.ifBreak,
        startTime: startTime,
<<<<<<< HEAD
        endTime: null,
        startEsteem: req.body.startEsteem,
        endEsteem: null
=======
        endTime: null
>>>>>>> 273d0858d152334c780f22b170bc052e9f93603a
    })

    period = await period.save();

<<<<<<< HEAD
    res.send(period);
});

module.exports = router
=======
    res.send(lastPeriod);
    res.send(period);
});

router.put('/:agentId', async (req, res) => {

});
>>>>>>> 273d0858d152334c780f22b170bc052e9f93603a
