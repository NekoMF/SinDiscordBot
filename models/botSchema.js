const mongoose = require('mongoose')

const botSchema = new mongoose.Schema({
    botID: {type: String, require: true, unique:true},

    commandsRun: {type: Number, default: 0},
    Name : {type: String},
    digNumber: {type: Number, default: 0},

       
})


const model = mongoose.model("BotModels", botSchema);

module.exports = model;