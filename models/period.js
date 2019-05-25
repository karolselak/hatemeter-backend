const mongoose = require("mongoose");

const periodSchema = new mongoose.Schema({
    agentId: String,
    periodId: String,
    ifBreak: Boolean,
    startTime: Date,
    endTime: Date,
    startEsteem: Date,
    endEsteem: Date
})

const Period = mongoose.model('Period', periodSchema);

//exports.messageSchema = messageSchema;
exports.Period = Period;