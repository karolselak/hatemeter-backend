const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    agentId: String,
    conversationId: String,
    listOfMessages: Array
})

const Conversation = mongoose.model('Conversation', conversationSchema);

//exports.messageSchema = messageSchema;
exports.Conversation = Conversation;