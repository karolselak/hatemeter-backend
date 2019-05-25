const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    agentId: String
})

const Agents = mongoose.model('Agents', agentSchema);

exports.agentSchema = agentSchema;
exports.Agents = Agents;
