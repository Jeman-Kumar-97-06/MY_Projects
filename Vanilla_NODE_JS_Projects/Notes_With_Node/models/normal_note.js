const mongoose = require('mongoose');
const schema   = mongoose.Schema;
const normalNoteSchema = new schema(
    {
        title:{
            type:String,
            required:true
        },
        subject:{
            type:String,
        },
        body:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)
const NoteNorm = mongoose.model('NoteNorm',normalNoteSchema);
module.exports = NoteNorm;