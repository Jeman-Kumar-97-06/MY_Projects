const mongoose = require('mongoose');
const schema   = mongoose.Schema;
const listNoteSchema = new schema(
    {
        title:{
            type:String,
            required:true
        },
        subject:{
            type:String,
        },
        listItems:{
            type:Array,
            required:true
        }
    },
    {timestamps:true}
)
const NoteList = mongoose.model('NoteList',listNoteSchema);
module.exports = NoteList;