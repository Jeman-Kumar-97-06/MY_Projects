const mongoose   = require('mongoose');
const { type } = require('os');
const Schema     = mongoose.Schema;
const listSchema = new Schema({
    title : {
        type: String,
        require : true
    },
    list_con : {
        type: Array,
        require : true
    }
})

module.exports   = mongoose.model('List',listSchema);