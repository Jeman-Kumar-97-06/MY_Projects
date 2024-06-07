const mongoose   = require('mongoose');
const { type } = require('os');
const Schema     = mongoose.Schema;
const noteSchema = new Schema({
    title : {
        type: String,
        require : true
    },
    note_con : {
        type: String,
        require : true
    }
})

module.exports   = mongoose.model('Note',noteSchema);